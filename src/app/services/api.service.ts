import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

export interface Test {
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

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
}
