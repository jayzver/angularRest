import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {GroupAggregateRestService} from '../../../services/group-aggregate/group-aggregate-rest/group-aggregate-rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupAggregateCollectionService} from "../../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group-aggregate.component.html',
  styleUrls: ['./create-group-aggregate.component.css']
})
export class CreateGroupAggregateComponent implements OnInit
{
  group: GroupAggregate = new GroupAggregate();
  nameHint: string;
  file: File;
  validator;

  constructor(private service: GroupAggregateCollectionService, private route: ActivatedRoute, private router: Router)
  {
  }

  ngOnInit(): void
  {
    this.group.typeOfChildren = 1;
    this.route.params.subscribe(params => {
      this.group.parentId = (params.parentId == null) ? 0 : params.parentId;
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
      this.service.saveGroupAggregate(this.group, this.file);
      let desired: GroupAggregate;
      desired = this.service.getGroups.find(one => one.id === this.group.parentId);
      this.router.navigate(['group_aggregate_by_parent_id', desired.id, desired.nameTarget]);
    }
  }

  inputFile(event): void
  {
    this.file = event.target.files[0];
    this.group.imgUrl = this.file.name;
  }
}
