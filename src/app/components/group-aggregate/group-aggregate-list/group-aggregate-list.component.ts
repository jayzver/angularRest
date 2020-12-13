import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregateCollectionService} from '../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './group-aggregate-list.component.html',
  styleUrls: ['./group-aggregate-list.component.css']
})

export class GroupAggregateListComponent implements OnInit, OnDestroy
{
  constructor(public groups: GroupAggregateCollectionService, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe((params) => {
      this.groups.getByParentId(this.groups.currGroupCopy.id);
    });
  }

  ngOnDestroy(): void
  {
  }
}
