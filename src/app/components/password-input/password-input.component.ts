import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  passwordControl = new FormControl();

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: string): void {
    if (value !== undefined) {
      this.passwordControl.setValue(value);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(): void {
    try {
      this.onChange(this.passwordControl.value);
      this.onTouched();
    } catch (error) {
      console.error('Error during input change:', error);
    }
  }

}
