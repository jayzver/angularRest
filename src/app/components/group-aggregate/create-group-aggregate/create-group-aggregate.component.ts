import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {FileInput} from 'ngx-material-file-input';
import {GroupAggregateService} from '../../../services/group-aggregate-service/group-aggregate.service';

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

  constructor(private service: GroupAggregateService)
  {
  }

  ngOnInit(): void
  {
    this.group.typeOfChildren = 1;
  }

  cancel(): void
  {
    // console.log(this.group);
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
    // console.log(event.target.files[0].name);
    this.file = event.target.files[0];
    this.group.imageUrl = this.file.name;
  }
}
