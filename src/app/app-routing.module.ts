import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import {GroupAggregateComponent} from './group_aggregate/group-aggregate.component';
import {AggregateComponent} from './aggregate/aggregate.component';

const routes: Routes =
  [
    {path: 'root_group_aggregate', component: GroupAggregateComponent},
    {path: 'group_aggregate_by_parent_id/:id', component: GroupAggregateComponent},
    {path: 'about', component: AboutComponent},
    {path: 'aggregates_by_group_id/:id', component: AggregateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
