import {Component, OnInit} from '@angular/core';
import {GroupAggregateCollectionService} from '../../services/group-aggregate/group-aggregate-collection/group-aggregate-collection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  iconBtnGroupAggregate = 'assets/data/client/imgs/icons/gear.png';
  constructor(private groups: GroupAggregateCollectionService, private router: Router) {}
  ngOnInit(): void
  {
  }
  getStartList(): void
  {
    this.router.navigate(['group_aggregate']);
  }
}
