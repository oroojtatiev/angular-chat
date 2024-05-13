import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {IResponse, IUser} from '../../models/user.interface'
import {catchError, Observable, tap, throwError} from 'rxjs'
import {SnackbarService} from '../../services/snackbar.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private snackbar: SnackbarService,
  ) {}

  create(user: IUser): Observable<IResponse<IUser>> {
    return this.http
      .post<IResponse<IUser>>('/api/user', user)
      .pipe(
        tap(res => this.snackbar.info(`User ${res.data.username} has been created`)),
        catchError(response => {
          if (response instanceof HttpErrorResponse) {
            this.snackbar.error(response.error.message)
          }

          return throwError(() => response)
        })
      )
  }
}
