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
  fileInput: FileInput;
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
    this.group.imageUrl = this.fileInput.files[0].name;
    console.log(this.group);
  }

  send(isValid: boolean): void
  {
    if (isValid)
    {
      this.service.saveGroupAggregate(this.group).subscribe(data =>
      {console.log(data); });
    }
  }

  inputFile(event): void
  {
    // console.log(event.target.files[0].name);
    this.group.imageUrl = event.target.files[0].name;
  }
}
