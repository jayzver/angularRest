import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-aggregate-item',
  templateUrl: './group-aggregate-item.component.html',
  styleUrls: ['./group-aggregate-item.component.css']
})
export class GroupAggregateItemComponent implements OnInit
{
  @Input() group = new GroupAggregate();
  imgPathGroupAggregate = 'assets/data/server/imgs/groupImages/';
  constructor(private router: Router)
  {}

  ngOnInit(): void
  {
  }

  onClick(): void
  {
    if (this.group.typeOfChildren === 1)
    {
      this.router.navigate(['group_aggregate_by_parent_id', this.group.id, this.group.nameTarget]);
    } else if (this.group.typeOfChildren === 2)
    {
      this.router.navigate(['aggregates_by_group_id', this.group.id]);
    }
  }
  getMessage(message: string): void
  {
    switch (message)
    {
      case 'edit':
      {
        console.log('edit');
        this.router.navigate(['create_group_aggregate', 'edit', this.group.id]);
      }
      break;
      case 'delete':
      {
        console.log('delete');
      }
      break;
      case 'info':
      {
        console.log('info');
      }
      break;
      case 'redirect':
      {
        console.log('redirect');
      }
      break;
    }
  }
}
