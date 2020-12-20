import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/GroupAggregate/group-aggregate';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregateCollectionService} from '../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group-aggregate.component.html',
  styleUrls: ['./create-group-aggregate.component.css']
})
export class CreateGroupAggregateComponent implements OnInit
{
  parentId: number;
  group: GroupAggregate;
  nameHint: string;
  action: string;
  file: File;
  f: number;
  validator;

  constructor(private gacs: GroupAggregateCollectionService, private route: ActivatedRoute, private router: Router)
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
        this.group = this.gacs.findById(id);
        if (this.group === null)
        {
          this.router.navigate(['group_aggregate', 0]);
        }
      } else if (this.action === 'create')
      {
        this.group = new GroupAggregate();
        this.parentId = id;
        this.group.typeOfChildren = 1;
      } else
      {
        this.callback();
      }
    });
  }

  cancel(): void
  {
    window.history.go(-1);
    // this.router.navigate(['group_aggregate_by_parent_id', 0, 'Главная']);
  }

  private callback(): void
  {
    this.router.navigate(['group_aggregate', this.gacs._parent.id]);
  }

  send(isValid: boolean): void
  {
    if (isValid)
    {
      if (this.action === 'create')
      {
        this.gacs.save(this.group, this.file, this.parentId, this.callback);
      } else
      {
        this.gacs.update(this.group, this.file, this.callback);
      }
    }
  }

  inputFile(event): void
  {
    this.file = event.target.files[0];
  }
}
