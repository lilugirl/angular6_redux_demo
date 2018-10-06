import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styles: []
})
export class Main2Component implements OnInit {
  login = false;
  user = '';

  constructor(public commonService: CommonService) {


  }

  ngOnInit() {

  }

  onLogin() {

    this.commonService.onLogin();

  }

  onLogout() {

    this.commonService.onLogout();

  }

}
