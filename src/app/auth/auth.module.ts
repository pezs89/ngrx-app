import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterPageComponent } from './containers/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterFormComponent } from './components/register-form.component';
import { SharedModule } from '../shared/shared.module';

const CONTAINERS = [RegisterPageComponent];
const COMPONENTS = [RegisterFormComponent];

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [],
  declarations: [CONTAINERS, COMPONENTS],
  providers: [],
})
export class AuthModule {}
