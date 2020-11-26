import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestService} from '../rest/rest.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregate} from '../classes/group-aggregate';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './groupaggregate.component.html',
  styleUrls: ['./groupaggregate.component.css']
})

export class GroupAggregateComponent implements OnInit, OnDestroy
{
  private sub: Subscription;
  groups: GroupAggregate[] = [];
  titlePage: string;

  constructor(private service: RestService, private router: Router, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      let id;
      id = (params.id == null) ? 0 : params.id;
      this.titlePage = (params.name == null) ? 'Главная' : params.name;
      this.sub = this.service.getGroupsByParentId(id).subscribe((data: GroupAggregate[]) =>
        {
          console.log(data);
          this.groups = data;
        },
        error => console.log(error));
    });
  }

  onClick($event: MouseEvent, id: number): void
  {
    let group;
    group = this.groups.find(one => one.id === id);
    if (group.hasGroup === 1)
    {
      this.router.navigate(['group_aggregate_by_parent_id', id, group.nameGroup]);
    } else if (group.hasAggregate === 1)
    {
      this.router.navigate(['aggregates_by_group_id', id]);
    }
  }

  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }
}
