import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Aggregate} from "../../../classes/aggregate/aggregate";
import {AggregateCollectionService} from "../../../services/aggregate/aggregateCollection/aggregate-collection.service";

@Component({
  selector: 'app-aggregate-item',
  templateUrl: './aggregate-item.component.html',
  styleUrls: ['./aggregate-item.component.css']
})
export class AggregateItemComponent implements OnInit {

  @Input() aggregate = new Aggregate();
  imgPathGroupAggregate = 'assets/data/server/imgs/aggregateImages/';
  isInfo = false;
  constructor(private router: Router, private acs: AggregateCollectionService, private route: ActivatedRoute)
  {}
  ngOnInit(): void
  {
  }
  onClick(): void
  {
    this.router.navigate(['aggregate/one_by_parent_id', this.aggregate.id]);
  }
  getMessage(message: string): void
  {
    switch (message)
    {
      case 'edit':
      {
        console.log('edit');
      }
      break;
      case 'delete':
      {
        console.log('delete');
      }
      break;
      case 'info':
      {
        console.log('info');
        this.isInfo = !this.isInfo;
      }
      break;
      case 'redirect':
      {
        console.log('redirect');
      }
      break;
    }
  }
}
