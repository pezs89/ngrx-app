import { createAction, props } from '@ngrx/store';
import { SignUpUser } from '../models/sign-up-user';
import { Auth } from '../models/auth';

export const signUpRequest = createAction(
  '[Sign Up Page] Sign Up Request',
  props<{ payload: SignUpUser }>()
);

export const signUpSuccess = createAction(
  '[Sign Up Page] Sign Up Success',
  props<{ payload: Auth }>()
);

export const signUpError = createAction(
  '[Sign Up Page] Sign Up Error',
  props<{ payload: string }>()
);
