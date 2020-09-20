import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromAuth from './reducers';

import { SignUpPageComponent } from './containers/sign-up-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpFormComponent } from './components/sign-up-form.component';
import { SharedModule } from '../shared/shared.module';
import { SignUpEffects } from './effects/sign-up.effects';
import { PrimeNgModule } from '../primeng/prime-ng.module';

const CONTAINERS = [SignUpPageComponent];
const COMPONENTS = [SignUpFormComponent];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducers),
    EffectsModule.forFeature([SignUpEffects]),
    PrimeNgModule,
  ],
  exports: [],
  declarations: [CONTAINERS, COMPONENTS],
  providers: [],
})
export class AuthModule {}
