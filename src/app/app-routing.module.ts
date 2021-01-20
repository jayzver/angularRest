import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {GroupAggregateListComponent} from './components/group-aggregate/group-aggregate-list/group-aggregate-list.component';
import {CreateGroupAggregateComponent} from './components/group-aggregate/create-group-aggregate/create-group-aggregate.component';
import {AggregateViewComponent} from "./components/aggregate/aggregate-view/aggregate-view.component";
import {AggregateListViewComponent} from "./components/aggregate/aggregate-list-view/aggregate-list-view.component";

const routes: Routes =
  [
    {path: 'group_aggregate/:id', component: GroupAggregateListComponent},
    {path: 'group_aggregate', component: GroupAggregateListComponent},
    {path: 'create_group_aggregate/:action/:id', component: CreateGroupAggregateComponent},
    {path: 'aggregate/one_by_parent_id/:parentId', component: AggregateViewComponent},
    {path: 'aggregate/children/:parent/:id', component: AggregateListViewComponent},
    {path: 'about', component: AboutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
