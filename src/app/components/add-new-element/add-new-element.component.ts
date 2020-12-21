import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregateCollectionService} from '../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-element',
  templateUrl: './add-new-element.component.html',
  styleUrls: ['./add-new-element.component.css']
})
export class AddNewElementComponent implements OnInit
{
  parentId: number;
  iconBtnAdd = 'assets/data/client/imgs/btns/add256.png';
  constructor(public gacs: GroupAggregateCollectionService, private router: Router)
  {
  }

  ngOnInit(): void
  {
  }

  createGroupAggregate(): void
  {
    this.parentId = this.gacs._parent.id;
    this.router.navigate(['create_group_aggregate', 'create', this.parentId]);
  }
}
