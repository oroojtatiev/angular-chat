import {AbstractControl, ValidationErrors} from '@angular/forms'

export class CustomValidators {
  static validatePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')
    const passwordConfirm = control.get('passwordConfirm')

    if (password && passwordConfirm && password.value === passwordConfirm.value) {
      return null
    }

    return {passwordNotMatching: true}
  }
}

