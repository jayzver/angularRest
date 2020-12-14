import {Component, OnDestroy, OnInit} from '@angular/core';
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
  constructor(public groups: GroupAggregateCollectionService, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe((params) =>
    {
      let id: number;
      id = (params.id !== undefined) ? params.id : 0;
      this.title = (params.title !== undefined) ? params.title : 'Главная';
      this.groups.getByParentId(id);
      this.groups.parentTitle = this.title;
      this.groups.parentId = id;
    });
  }

  ngOnDestroy(): void
  {
  }
}
