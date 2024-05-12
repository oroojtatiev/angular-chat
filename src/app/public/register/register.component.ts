import {Component} from '@angular/core'
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import {RouterLink} from '@angular/router'
import {MatAnchor, MatButton} from '@angular/material/button'
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card'
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {CustomValidators} from '../../helpers/validation'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatAnchor,
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
    MatError,
    MatLabel,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor() {}

  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required, CustomValidators.validatePassword]),
    },
    {validators: CustomValidators.validatePassword}
  )

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl
  }

  register() {}
}
