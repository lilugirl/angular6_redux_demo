import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  greetMessage = 'Loading';

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getAllState().subscribe(state => {
      console.log(state);
      this.greetMessage = state.login ? 'Hello ' + state.user : 'Hello Guest';

    });
  }

}
