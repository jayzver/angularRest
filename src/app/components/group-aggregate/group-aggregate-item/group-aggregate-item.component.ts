import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregateCollectionService} from '../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';

@Component({
  selector: 'app-group-aggregate-item',
  templateUrl: './group-aggregate-item.component.html',
  styleUrls: ['./group-aggregate-item.component.css']
})
export class GroupAggregateItemComponent implements OnInit
{
  @Input() group = new GroupAggregate();
  imgPathGroupAggregate = 'assets/data/server/imgs/groupImages/';
  isInfo = false;
  constructor(private router: Router, private groups: GroupAggregateCollectionService, private route: ActivatedRoute)
  {}
  ngOnInit(): void
  {
  }
  onClick(): void
  {
    if (this.group.typeOfChildren === 1)
    {
      this.router.navigate(['group_aggregate', this.group.id, this.group.nameTarget]);
    } else if (this.group.typeOfChildren === 2)
    {
      // this.router.navigate(['aggregates_by_group_id', this.group.id]);
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
        this.groups.delete(this.group.id);
        // this.router.navigate(['group_aggregate', this.groups.parentId, this.groups.parentTitle]);
      }
      break;
      case 'info':
      {
        console.log('info');
        this.isInfo = !this.isInfo;
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
