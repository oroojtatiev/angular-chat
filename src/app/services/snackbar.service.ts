import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'
import {Injectable} from '@angular/core'

const mainConfig: MatSnackBarConfig = {
  duration: 2000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
}

// TODO: panelClass not work with scss

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  snackbar: MatSnackBar

  constructor(snackbar: MatSnackBar) {
    this.snackbar = snackbar
  }

  info(message: string) {
    const config = new MatSnackBarConfig()

    config.panelClass = ['snackbar__info']

    this.snackbar.open(message, 'Close', {
      ...mainConfig,
      ...config,
    })
  }

  error(message: string) {
    const config = new MatSnackBarConfig()

    config.panelClass = ['snackbar__error']

    this.snackbar.open(message, 'Close', {
      ...mainConfig,
      ...config,
    })
  }
}
