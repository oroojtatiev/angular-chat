import {inject} from '@angular/core'
import {CanActivateFn, Router} from '@angular/router'
import {JwtHelperService} from '@auth0/angular-jwt'

export const AuthGuard: CanActivateFn = async () => {
  const router = inject(Router)
  const jwtHelper = inject(JwtHelperService)
  const token = localStorage.getItem('access_token')

  if (token) {
    const expired = jwtHelper.isTokenExpired(token)

    if (expired) {
      await router.navigate(['/public/login'])
      return false
    }

    return true
  }
  else {
    await router.navigate(['/public/login'])
    return false
  }
}
