import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs/operators';
import { HttpErrorsActions } from '../actions';

@Injectable()
export class HttpErrorsEffects {
  httpError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HttpErrorsActions.showHttpError),
        tap(({ payload }) =>
          this.messageService.add({
            severity: 'error',
            key: 'error',
            data: payload,
          })
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
}
