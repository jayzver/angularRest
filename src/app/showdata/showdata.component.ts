import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest/rest.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit
{
  groups = [];
  constructor(private service: RestService)
  {
  }

  ngOnInit(): void
  {
    this.service.getGroups().subscribe((data: any[]) =>
    {
      console.log(data);
      this.groups = data;
    });
  }

}
