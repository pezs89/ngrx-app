import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TextInputComponent } from './components/text-input/text-input.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimeNgModule],
  exports: [TextInputComponent],
  declarations: [TextInputComponent],
  providers: [],
})
export class SharedModule {}
