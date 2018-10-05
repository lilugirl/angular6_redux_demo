import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

@Injectable()
export class UserService {
  constructor(private store: Store<any>) {

  }
  getAllState() {
    return this.store.select('appReducer');
  }
  updateState(obj) {
    this.store.dispatch({
      type: obj.action,
      payload: obj.payload
    });
  }
}
