import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Auth } from '../models/auth';
import { AuthResponse } from '../models/auth-response';
import { SignUpUser } from '../models/sign-up-user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SignUpService {
  constructor(private http: HttpClient) {}

  signUp(signUpData: SignUpUser): Observable<Auth> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/users`, {
        data: signUpData,
      })
      .pipe(map((response: AuthResponse) => response.user));
  }
}
