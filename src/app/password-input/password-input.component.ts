import { Component } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  password: string = '';
  isWeak: boolean = false;
  isMedium: boolean = false;
  isStrong: boolean = false;

  checkPasswordStrength() {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (passwordLength === 0) {
      this.isWeak = this.isMedium = this.isStrong = false;
    } else if (passwordLength < 8) {
      this.isWeak = true;
      this.isMedium = this.isStrong = false;
    }
    else if (hasLetters && hasNumbers && hasSymbols) {
      this.isStrong = true;
      this.isWeak = this.isMedium = false;
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      this.isMedium = true;
      this.isWeak = this.isStrong = false;
    } else {
      this.isWeak = true;
      this.isMedium = this.isStrong = false;
    }
  }
}

