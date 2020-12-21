import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregateCollectionService} from '../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './group-aggregate-list.component.html',
  styleUrls: ['./group-aggregate-list.component.css']
})

export class GroupAggregateListComponent implements OnInit, OnDestroy
{
  title: string;
  constructor(public gacs: GroupAggregateCollectionService, private route: ActivatedRoute){}

  ngOnInit(): void
  {
    this.route.params.subscribe((params) =>
    {
      let id: number;
      id = (params.id !== undefined) ? params.id : 0;
      this.gacs.getGroups(id, (service: GroupAggregateCollectionService) => {
        this.title = service._parent.nameTarget;
      });
    });
  }

  ngOnDestroy(): void {}
}
