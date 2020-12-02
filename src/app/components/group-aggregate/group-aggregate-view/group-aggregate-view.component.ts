import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupAggregateService} from '../../../services/group-aggregate-service/group-aggregate.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregate} from '../../../classes/group-aggregate';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './group-aggregate-view.component.html',
  styleUrls: ['./group-aggregate-view.component.css']
})

export class GroupAggregateViewComponent implements OnInit, OnDestroy
{
  private sub: Subscription;
  groups: GroupAggregate[] = [];
  titlePage: string;
  parentId: number;

  constructor(private service: GroupAggregateService, private router: Router, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      this.parentId = (params.parentId == null) ? 0 : params.parentId;
      this.titlePage = (params.name == null) ? 'Главная' : params.name;
      this.sub = this.service.getGroupsByParentId(this.parentId).subscribe((data: GroupAggregate[]) =>
        {
          console.log(data);
          this.groups = data;
        },
        error => console.log(error));
    });
  }

  onClick($event: MouseEvent, parentId: number): void
  {
    let group;
    group = this.groups.find(one => one.id === parentId);
    if (group.typeOfChildren === 1)
    {
      this.router.navigate(['group_aggregate_by_parent_id', parentId, group.nameGroup]);
    } else if (group.typeOfChildren === 2)
    {
      this.router.navigate(['aggregates_by_group_id', parentId]);
    }
  }

  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }
}
