import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

export interface AppReducerState {
  login: boolean;
  user?: string;
}

const initialState: AppReducerState = {
  login: false

};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_LOGOUT:
      return {
        ...state,
        login: false,
        user: null
      };

    case ACTION_LOGIN:
      return {
        ...state,
        login: true,
        user: action.payload.user
      };
  }
  return state;
}
