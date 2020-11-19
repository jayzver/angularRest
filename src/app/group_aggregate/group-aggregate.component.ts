import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestService} from '../rest/rest.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './groupaggregate.component.html',
  styleUrls: ['./groupaggregate.component.css']
})

export class GroupAggregateComponent implements OnInit, OnDestroy
{
  private sub: Subscription;
  groups = [];

  constructor(private service: RestService, private router: Router, private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      let id;
      id = (params.id == null) ? 0 : params.id;
      this.sub = this.service.getGroupById(id).subscribe((data: any[]) =>
      {
        console.log(data);
        this.groups = data;
      });
    });
  }

  onClick($event: MouseEvent, index: number): void
  {
    // if (this.groups[index].hasGroup == 1)
    {
      // console.log(this.groups[index].id);
      // this.sub = this.service.getGroupById(this.groups[index].id).subscribe((data: any[]) =>
      //   {
      //     console.log(data);
      //     this.groups = null;
      //     this.groups = data;
      //   }
      // );
      this.router.navigate(['group_aggregate_by_parent_id', this.groups[index].id]);
    }
    // else
    // {
    //   this.router.navigate(['aggregates_by_group_id', this.groups[index].id]);
    // }
  }

  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }
}
