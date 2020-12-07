import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupAggregateRestService} from '../../../services/group-aggregate/group-aggregate-rest/group-aggregate-rest.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {GroupAggregateCollectionService} from '../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './group-aggregate-list.component.html',
  styleUrls: ['./group-aggregate-list.component.css']
})

export class GroupAggregateListComponent implements OnInit, OnDestroy
{
  private sub: Subscription;
  titlePage: string;
  parentId: number;

  constructor(public groups: GroupAggregateCollectionService, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      this.parentId = (params.parentId == null) ? 0 : params.parentId;
      this.groups.getGroupsByParentId(this.parentId);
      this.titlePage = (params.name == null) ? 'Главная' : params.name;
    });
  }

  ngOnDestroy(): void
  {
  }
}
