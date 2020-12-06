import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {Router} from '@angular/router';
import {GroupAggregateRestService} from '../../../services/group-aggregate/group-aggregate-rest/group-aggregate-rest.service';

@Component({
  selector: 'app-group-aggregate-item',
  templateUrl: './group-aggregate-item.component.html',
  styleUrls: ['./group-aggregate-item.component.css']
})
export class GroupAggregateItemComponent implements OnInit
{
  @Input() group = new GroupAggregate();
  imgPathGroupAggregate = 'assets/data/server/imgs/groupImages/';
  constructor(private router: Router, private service: GroupAggregateRestService)
  {}

  ngOnInit(): void
  {
  }

  onClick(): void
  {
    let group;
    group = this.groups.find(one => one.id === group.id);
    if (group.typeOfChildren === 1)
    {
      this.router.navigate(['group_aggregate_by_parent_id', group.id, group.nameTarget]);
    } else if (group.typeOfChildren === 2)
    {
      this.router.navigate(['aggregates_by_group_id', group.id]);
    }
  }

}
