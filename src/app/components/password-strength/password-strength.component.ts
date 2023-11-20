import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthIndicatorComponent {
  @Input() strength: string = '';

  markers: string[] = ['weak', 'medium', 'strong'];

  getStrengthIndicatorClass(): Record<string, boolean> {
    try {
      const classes: Record<string, boolean> = {
        'default': !this.strength,
      };

      if (this.strength) {
        classes[this.strength] = true;
      }

      return classes;
    } catch (error) {
      console.error('Error in getStrengthIndicatorClass:', error);
      return {};
    }
  }
}
