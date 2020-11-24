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

  constructor(private service: RestService, private router: Router, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      let id;
      id = (params.id == null) ? 0 : params.id;
      this.sub = this.service.getGroupById(id).subscribe((data: GroupAggregate[]) =>
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
      this.router.navigate(['group_aggregate_by_parent_id', id]);
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
