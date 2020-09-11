import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromSignUp from './sign-up-page.reducer';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromSignUp.signUpPageFeatureKey]: fromSignUp.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromSignUp.signUpPageFeatureKey]: fromSignUp.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectSignUpState = createSelector(
  selectAuthState,
  (state) => state[fromSignUp.signUpPageFeatureKey]
);

export const selectIsSignUpLoading = createSelector(
  selectSignUpState,
  (state) => state.isLoading
);
