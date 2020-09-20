import {
  combineReducers,
  Action,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromHttpErrors from './http-errors';

export const coreFeatureKey = 'core';

export interface CoreState {
  [fromHttpErrors.httpErrorsFeatureKey]: fromHttpErrors.State;
}

export interface State extends fromRoot.State {
  [coreFeatureKey]: CoreState;
}

export function reducers(state: CoreState | undefined, action: Action) {
  return combineReducers({
    [fromHttpErrors.httpErrorsFeatureKey]: fromHttpErrors.reducer,
  })(state, action);
}

export const selectCoreState = createFeatureSelector<State, CoreState>(
  coreFeatureKey
);

export const selectHttpErrorsState = createSelector(
  selectCoreState,
  (state) => state[fromHttpErrors.httpErrorsFeatureKey]
);

export const selectHttpErrors = createSelector(
  selectHttpErrorsState,
  (state) => state.errors
);
