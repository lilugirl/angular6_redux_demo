import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ACTION_LOGIN, ACTION_LOGOUT } from '../store/actions/appActions';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  login() {

    this.user.updateState({
      action: ACTION_LOGIN,
      payload: { user: 'liuyi' }
    });
  }

  logout() {
    this.user.updateState({
      action: ACTION_LOGOUT,
      payload: {}
    });
  }

}
