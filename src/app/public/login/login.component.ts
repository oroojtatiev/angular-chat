import {Component} from '@angular/core'
import {MatAnchor, MatButton} from '@angular/material/button'
import {Router, RouterLink} from '@angular/router'
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card'
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {NgIf} from '@angular/common'
import {catchError, tap, throwError} from 'rxjs'
import {ApiService} from '../../services/api.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatAnchor,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
  ) {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  login() {
    if (!this.form.valid) {
      return
    }

    this.apiService
      .login(this.form.value)
      .pipe(
        tap(() => this.router.navigate(['../../private/dashboard'])),
        catchError(r => {
          return throwError(() => r)
        })
      )
      .subscribe()
  }
}
