<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {FileInput} from 'ngx-material-file-input';
import {GroupAggregateService} from '../../../services/group-aggregate-service/group-aggregate.service';
=======
import {Component, OnInit} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
>>>>>>> 14235d9f7a902610947d47d601fa6bec219434f5

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group-aggregate.component.html',
  styleUrls: ['./create-group-aggregate.component.css']
})
export class CreateGroupAggregateComponent implements OnInit
{
  group: GroupAggregate = new GroupAggregate();
<<<<<<< HEAD
=======
  groupContent: string;
>>>>>>> 14235d9f7a902610947d47d601fa6bec219434f5
  nameHint: string;
  fileInput: FileInput;
  validator;

<<<<<<< HEAD
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
=======
  constructor()
  {
  }

  ngOnInit(): void
  {
>>>>>>> 14235d9f7a902610947d47d601fa6bec219434f5
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
    console.log(event.target.files[0].name);
    this.group.imageUrl = event.target.files[0].name;
  }
}
