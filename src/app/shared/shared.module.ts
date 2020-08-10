import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TextInputComponent],
  declarations: [TextInputComponent],
  providers: [],
})
export class SharedModule {}
