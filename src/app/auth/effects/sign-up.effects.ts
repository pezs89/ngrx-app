import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { SignUpActions } from '../actions';
import { SignUpService } from '../services/sign-up.service';
import { Auth } from '../models/auth';

@Injectable()
export class SignUpEffects {
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signUpRequest),
      exhaustMap(({ payload }) =>
        this.signUpService.signUp(payload).pipe(
          map((data: Auth) =>
            SignUpActions.signUpSuccess({ payload: { ...data } })
          ),
          catchError((err: HttpErrorResponse) =>
            of(SignUpActions.signUpError({ payload: err.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private signUpService: SignUpService
  ) {}
}
