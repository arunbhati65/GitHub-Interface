import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './users/users.component';
import { ServerService } from './users.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { DisplayRepoComponent } from './user/display-repo/display-repo.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { DropDownDirective } from './directives/dropDown.directive';


@NgModule({
  declarations: [
    AppComponent,
    DisplayRepoComponent,
    DisplayUserComponent,DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,NgxPaginationModule,OrderModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModuleMine { }
