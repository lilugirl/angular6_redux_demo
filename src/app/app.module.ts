import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/index';
import { UserService } from './user.service';
import { CommonService } from './common.service';
import { MainComponent } from './main/main.component';
import { Header2Component } from './header2/header2.component';
import { Main2Component } from './main2/main2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    Header2Component,
    Main2Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {

    })
  ],
  providers: [UserService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
