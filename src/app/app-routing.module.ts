import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import {GroupAggregateComponent} from './group_aggregate/group-aggregate.component';
import {AggregateComponent} from './aggregate/aggregate.component';
import {CreateGroupAggregateComponent} from './create-group-aggregate/create-group-aggregate.component';

const routes: Routes =
  [
    {path: 'group_aggregate_by_parent_id/:id/:name', component: GroupAggregateComponent},
    {path: 'group_aggregate_by_parent_id', component: GroupAggregateComponent},
    {path: 'create_group_aggregate/:parentId', component: CreateGroupAggregateComponent},
    {path: 'aggregates_by_group_id/:id', component: AggregateComponent},
    {path: 'about', component: AboutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
