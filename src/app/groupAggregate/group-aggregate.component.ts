import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestService} from '../rest/rest.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-aggregate',
  templateUrl: './groupaggregate.component.html',
  styleUrls: ['./groupaggregate.component.css']
})

export class GroupAggregateComponent implements OnInit, OnDestroy
{
  ROOT_GROUP = 'localhost:9966/api/groupaggregate/v1/rootgroup/';
  GROUP = 'localhost:9966/api/groupaggregate/v1/';
  private sub: Subscription;
  groups = [];

  constructor(private service: RestService, private router: Router)
  {
  }

  ngOnInit(): void
  {
    this.sub = this.service.getRootGroup().subscribe((data: any[]) =>
    {
      console.log(data);
      this.groups = data;
    });
  }

  onClick($event: MouseEvent, index: number): void
  {
    // if (this.groups[index].hasGroup == 1)
    {
      this.sub = this.service.getGroupById(this.groups[index].id).subscribe((data: any[]) =>
        {
          console.log(data);
          this.groups = null;
          this.groups = data;
        }
      );
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
