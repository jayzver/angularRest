import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AggregateCollectionService} from "../../../services/aggregate/aggregateCollection/aggregate-collection.service";
import {GroupAggregateCollectionService} from "../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service";

@Component({
  selector: 'app-aggregate-list-view',
  templateUrl: './aggregate-list-view.component.html',
  styleUrls: ['./aggregate-list-view.component.css']
})
export class AggregateListViewComponent implements OnInit
{
  title: string;

  constructor(private route: ActivatedRoute, public acs: AggregateCollectionService, private gacs: GroupAggregateCollectionService)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe((params) =>
    {
      let id;
      let parent;
      id = (params.id !== undefined) ? params.id : 0;
      if (id === 0)
      {
        return;
      }
      if (params.parent === 'groupAggregate')
      {
        this.acs.getChildren(id, (gacs: GroupAggregateCollectionService) => {
            this.title = gacs._parent.nameTarget;
        });
      }
      else if (params.parent === 'aggregate')
      {
        this.acs.getChildrenById(id, (acs: AggregateCollectionService) => {
          this.title = acs._parent.nameTarget;
        });
      }
    });
  }
}
