import { createAction, props } from '@ngrx/store';
import { HttpError } from '../models/http-error';

export const showHttpError = createAction(
  '[HTTP Errors interceptor] Show Http Error',
  props<{ payload: HttpError }>()
);

export const httpErrorShown = createAction(
  '[HTTP Errors Interceptor] Http Error Shown',
  props<{ payload: HttpError }>()
);

export const httpErrorClosed = createAction(
  '[HTTP Errors Interceptor] Http Error Closed',
  props<{ payload: HttpError }>()
);
