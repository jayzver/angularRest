import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit
{
  constructor(private route: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    let id;
    this.route.params.subscribe(params =>
    {
      id = params.id;
    });
  }
  public getAggregatesInGroups(groupId: number): void
  {
  }
}
