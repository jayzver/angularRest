import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { GroupAggregateComponent} from './group_aggregate/group-aggregate.component';
import { AboutComponent } from './about/about.component';
import { HoverDirDirective } from './hoverDIr/hover-dir.directive';
import { AggregateComponent } from './aggregate/aggregate.component';
import { CreateGroupAggregateComponent } from './create-group-aggregate/create-group-aggregate.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupAggregateComponent,
    AboutComponent,
    HoverDirDirective,
    AggregateComponent,
    CreateGroupAggregateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
