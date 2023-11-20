import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PasswordStrengthService {
    async getPasswordStrength(password: string): Promise<string> {
        try {
            const passwordLength = password.length;
            const hasLetters = /[a-zA-Z]/.test(password);
            const hasNumbers = /[0-9]/.test(password);
            const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            if (passwordLength === 0) {
                return 'default';
            } else if (passwordLength < 8) {
                return 'weak-long';
            } else if (hasLetters && hasNumbers && hasSymbols) {
                return 'strong';
            } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
                return 'medium';
            } else {
                return 'weak';
            }
        } catch (error) {
            console.error('Error calculating password strength:', error);
            throw error;
        }
    }
}
