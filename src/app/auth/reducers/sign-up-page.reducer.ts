import { createReducer, on } from '@ngrx/store';
import { SignUpActions } from '../actions';

export const signUpPageFeatureKey = 'signUpPage';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(SignUpActions.signUpRequest, (state) => ({
    ...state,
    isLoading: !state.isLoading,
  }))
);
