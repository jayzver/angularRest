import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './components/about/about.component';
import {GroupAggregateListComponent} from './components/group-aggregate/group-aggregate-list/group-aggregate-list.component';
import {CreateGroupAggregateComponent} from './components/group-aggregate/create-group-aggregate/create-group-aggregate.component';

const routes: Routes =
  [
    {path: 'group_aggregate_by_parent_id/:parentId/:name', component: GroupAggregateListComponent},
    {path: 'group_aggregate_by_parent_id', component: GroupAggregateListComponent},
    {path: 'create_group_aggregate/:parentId', component: CreateGroupAggregateComponent},
    {path: 'about', component: AboutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
