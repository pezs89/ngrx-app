import { createReducer, on } from '@ngrx/store';
import { HttpErrorsActions } from '../actions';
import { HttpError } from '../models/http-error';

export const httpErrorsFeatureKey = 'httpErrors';

export interface State {
  errors: HttpError;
}

export const initialState: State = {
  errors: {},
};

export const reducer = createReducer<State>(
  initialState,
  on(HttpErrorsActions.showHttpError, (state, action) => ({
    ...state,
    ...action.payload,
  }))
);
