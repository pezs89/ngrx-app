import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { HttpErrorsActions } from '../actions';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor(private store: Store<State>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        this.store.dispatch(HttpErrorsActions.showHttpError(err.error));
        return throwError(err);
      })
    );
  }
}
