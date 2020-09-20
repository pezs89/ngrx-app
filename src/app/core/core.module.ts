import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpErrorToastComponent } from './components/http-error-toast/http-error-toast.component';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: [HttpErrorToastComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
