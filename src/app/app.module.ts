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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/component/app.component';
import { GroupAggregateViewComponent} from './components/group-aggregate/group-aggregate-view/group-aggregate-view.component';
import { AboutComponent } from './components/about/about.component';
import { HoverDirective } from './directives/hover/hover.directive';
import { CreateGroupAggregateComponent } from './components/group-aggregate/create-group-aggregate/create-group-aggregate.component';
import { AggregateViewComponent } from './components/aggregate/aggregate-view/aggregate-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupAggregateViewComponent,
    AboutComponent,
    HoverDirective,
    CreateGroupAggregateComponent,
    AggregateViewComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
