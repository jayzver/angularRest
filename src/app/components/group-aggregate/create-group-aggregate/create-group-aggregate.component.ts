import {Component, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group-aggregate.component.html',
  styleUrls: ['./create-group-aggregate.component.css']
})
export class CreateGroupAggregateComponent implements OnInit
{
  group: GroupAggregate = new GroupAggregate();
  groupContent: string;
  nameHint: string;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
