import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {BehaviorSubject, catchError, Observable, tap, throwError} from 'rxjs'
import {SnackbarService} from './snackbar.service'
import {JwtHelperService} from '@auth0/angular-jwt'
import {ILogin, IResponse, IUser} from '../models/user.interface'

export interface Test {
  title: string
}

const username = localStorage.getItem('username')

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private username$ = new BehaviorSubject<string | null>(username)

  constructor(
    private readonly http: HttpClient,
    private readonly snackbar: SnackbarService,
    private readonly jwtHelper: JwtHelperService,
  ) {}

  getTest(): Observable<string> {
    /**
     * variant 1
     * */
    // return this.http.get<Test>('/api')
    //   .pipe(
    //     map(r => r.title)
    //   )

    /**
     * variant 2
     * */
    return new Observable<string>(subscriber => {
      this.http.get<Test>('/api')
        .subscribe(data => {
          return subscriber.next(data.title)
        })
    })
  }

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

  login(data: ILogin): Observable<object> {
    return this.http
      .post<IResponse<string>>('/api/auth', data)
      .pipe(
        tap(res => {
          const decoded = this.jwtHelper.decodeToken(res.data)
          this.username$.next(decoded.username)

          localStorage.setItem('access_token', res.data)
          localStorage.setItem('username', decoded.username)

          this.snackbar.info(`Welcome back, ${data.email}`)
        }),
        catchError(response => {
          if (response instanceof HttpErrorResponse) {
            this.snackbar.error(response.error.message)
          }

          return throwError(() => response)
        })
      )
  }

  getUsername(): Observable<string | null> {
    return this.username$.pipe()
  }
}
