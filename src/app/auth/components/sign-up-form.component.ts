import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpUser } from '../models/sign-up-user';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: 'sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpFormComponent implements OnInit {
  @Output() signUp = new EventEmitter<SignUpUser>();

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { email, password, username }: SignUpUser = this.signUpForm.value;
      this.signUp.emit({ username, email, password });
    }
  }
}
