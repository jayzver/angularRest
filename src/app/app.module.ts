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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {MaterialFileInputModule} from 'ngx-material-file-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/component/app.component';
import { GroupAggregateListComponent} from './components/group-aggregate/group-aggregate-list/group-aggregate-list.component';
import { AboutComponent } from './components/about/about.component';
import { HoverDirective } from './directives/hover/hover.directive';
import { CreateGroupAggregateComponent } from './components/group-aggregate/create-group-aggregate/create-group-aggregate.component';
import { AggregateViewComponent } from './components/aggregate/aggregate-view/aggregate-view.component';
import { GroupAggregateItemComponent } from './components/group-aggregate/group-aggregate-item/group-aggregate-item.component';
import { MenuGroupAggregateItemComponent } from './components/menu/menu-group-aggregate-item/menu-group-aggregate-item.component';
import { AddNewElementComponent } from './components/add-new-element/add-new-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupAggregateListComponent,
    AboutComponent,
    HoverDirective,
    CreateGroupAggregateComponent,
    AggregateViewComponent,
    GroupAggregateItemComponent,
    MenuGroupAggregateItemComponent,
    AddNewElementComponent
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
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MaterialFileInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
