import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SignUpUser } from '../models/sign-up-user';
import { SignUpActions } from '../actions';
import * as fromAuth from '../reducers';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: 'sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(fromAuth.selectIsSignUpLoading));
  }

  onSignUp(signUpData: SignUpUser) {
    this.store.dispatch(SignUpActions.signUpRequest({ payload: signUpData }));
  }
}
