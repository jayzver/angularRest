import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregateCollectionService} from '../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group-aggregate.component.html',
  styleUrls: ['./create-group-aggregate.component.css']
})
export class CreateGroupAggregateComponent implements OnInit
{
  group: GroupAggregate;
  nameHint: string;
  action: string;
  file: File;
  validator;

  constructor(private groups: GroupAggregateCollectionService, private route: ActivatedRoute, private router: Router)
  {
  }

ngOnInit(): void
{
  this.route.params.subscribe(params =>
  {
    this.action = params.action;
    let id;
    id = (params.id != null) ? params.id : 0;
    if (this.action === 'edit')
    {
      this.group = this.groups.findById(id);
    } else if (this.action === 'create')
    {
      this.group = new GroupAggregate();
      this.group.parentId = id;
      this.group.typeOfChildren = 1;
    } else
    {
      this.groups.resetCurrGroup();
      this.router.navigate(['group_aggregate']);
    }
  });
}

  cancel(): void
  {
    window.history.go(-1);
    // this.router.navigate(['group_aggregate_by_parent_id', 0, 'Главная']);
  }

  send(isValid: boolean): void
  {
    if (isValid)
    {
      if (this.action === 'create')
      {
        this.groups.save(this.group, this.file);
      } else
      {
        this.groups.update(this.group, this.file);
      }
    }
    this.router.navigate(['group_aggregate']);
  }

  inputFile(event): void
  {
    this.file = event.target.files[0];
    this.group.imgUrl = this.file.name;
  }
}
