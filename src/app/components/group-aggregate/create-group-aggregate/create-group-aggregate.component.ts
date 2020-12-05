import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {GroupAggregateService} from '../../../services/group-aggregate-service/group-aggregate.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private service: GroupAggregateService, private route: ActivatedRoute)
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
    alert(this.group.description);
  }

  send(isValid: boolean): void
  {
    if (isValid)
    {
      this.service.saveGroupAggregate(this.group, this.file).subscribe(data =>
      {console.log(data); });
    }
  }

  inputFile(event): void
  {
    this.file = event.target.files[0];
    this.group.imgUrl = this.file.name;
  }
}
