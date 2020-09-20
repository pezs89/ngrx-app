import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from 'src/app/reducers';
import { HttpError } from '../../models/http-error';
import * as fromCore from '../../reducers';

@Component({
  selector: 'app-http-error-toast',
  templateUrl: 'http-error-toast.component.html',
  styleUrls: ['./http-error-toast.component.scss'],
})
export class HttpErrorToastComponent implements OnInit {
  errors$: Observable<HttpError>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.errors$ = this.store.pipe(select(fromCore.selectHttpErrors));
    this.errors$.subscribe((err) => {
      console.log(err);
    });
  }
}
