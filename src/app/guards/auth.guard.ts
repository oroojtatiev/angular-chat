import {inject} from '@angular/core'
import {CanActivateFn, Router} from '@angular/router'

export const AuthGuard: CanActivateFn = async (activatedRouteSnapshot, routerStateSnapshot) => {
  const token = localStorage.getItem('token')
  const router = inject(Router)

  if (token) {
    return true
  }
  else {
    // await router.navigate(['test'])
    return false
  }
}
