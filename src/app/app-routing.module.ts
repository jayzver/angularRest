import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {GroupAggregateListComponent} from './components/group-aggregate/group-aggregate-list/group-aggregate-list.component';
import {CreateGroupAggregateComponent} from './components/group-aggregate/create-group-aggregate/create-group-aggregate.component';

const routes: Routes =
  [
    {path: 'group_aggregate_one/:id', component: GroupAggregateListComponent},
    {path: 'group_aggregate_two/:id', component: GroupAggregateListComponent},
    {path: 'group_aggregate_one', component: GroupAggregateListComponent},
    {path: 'group_aggregate_two', component: GroupAggregateListComponent},
    {path: 'create_group_aggregate/:action/:id', component: CreateGroupAggregateComponent},
    {path: 'about', component: AboutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
