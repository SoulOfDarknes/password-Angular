import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PasswordStrengthService } from '@services/password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  passwordForm!: FormGroup;
  passwordStrength: string = 'default';

  constructor(
    private formBuilder: FormBuilder,
    private passwordStrengthService: PasswordStrengthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.passwordForm = this.formBuilder.group({
      password: new FormControl(''),
    });

    this.subscribeToPasswordChanges();
  }

  private subscribeToPasswordChanges(): void {
    this.passwordForm.controls['password'].valueChanges.subscribe(
      async (value: string) => {
        try {
          this.passwordStrength = await this.passwordStrengthService.getPasswordStrength(value);
        } catch (error) {
          console.error('Error calculating password strength:', error);
        }
      },
      (error) => {
        console.error('Error subscribing to password changes:', error);
      }
    );
  }
}
