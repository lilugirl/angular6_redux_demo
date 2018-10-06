import { Injectable, OnInit } from '@angular/core';


@Injectable()
export class CommonService {
  login = false;
  user = '';
  counter = 0;
  greeting = '';

  constructor() {
    this.listen();
  }


  onLogin() {
    this.login = true;
    this.user = 'liuyi';
    this.counter++;
    this.listen();

  }

  onLogout() {
    this.login = false;
    this.user = null;
    this.counter--;
    this.listen();
  }

  listen() {
    if (this.login) {
      this.greeting = '你好 ' + this.user;
    } else {
      this.greeting = '请登录';
    }
  }

}
