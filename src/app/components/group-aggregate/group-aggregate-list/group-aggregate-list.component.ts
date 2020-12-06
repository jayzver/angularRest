import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupAggregateService} from '../../../services/group-aggregate-service/group-aggregate.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregate} from '../../../classes/group-aggregate';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './group-aggregate-list.component.html',
  styleUrls: ['./group-aggregate-list.component.css']
})

export class GroupAggregateListComponent implements OnInit, OnDestroy
{
  iconBtnAdd = 'assets/data/client/imgs/btns/add256.png';
  private sub: Subscription;
  groups: GroupAggregate[] = [];
  titlePage: string;
  parentId: number;
  imgPathGroupAggregate = 'assets/data/server/imgs/groupImages/';

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
      this.router.navigate(['group_aggregate_by_parent_id', parentId, group.nameTarget]);
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
