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
  private username = new BehaviorSubject<string | null>(username)

  constructor(
    private readonly http: HttpClient,
    private readonly snackbar: SnackbarService,
    private readonly jwtHelper: JwtHelperService,
  ) {}

  getTest(): Observable<Test> {
    return this.http.get<Test>('/api')
    // return new Observable<Test>(subscriber => {
    //   this.http.get<Test>('/api')
    //     .subscribe(data => {
    //       console.log(11, data)
    //       return subscriber.next(data)
    //     })
    // })
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
          const {username} = this.jwtHelper.decodeToken(res.data)
          this.username.next(username)

          localStorage.setItem('access_token', res.data)
          localStorage.setItem('username',username)

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
    return this.username.asObservable()
  }
}
