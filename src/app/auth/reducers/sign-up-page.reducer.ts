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
  on(
    SignUpActions.signUpRequest,
    SignUpActions.signUpError,
    SignUpActions.signUpSuccess,
    (state) => ({
      ...state,
      isLoading: !state.isLoading,
    })
  )
);
