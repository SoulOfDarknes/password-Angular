import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '@app/app.component';
import { PasswordInputComponent } from '@components/password-input/password-input.component';
import { PasswordStrengthIndicatorComponent } from '@components/password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
