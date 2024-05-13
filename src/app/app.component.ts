import {Component} from '@angular/core'
import {Observable} from 'rxjs'
import {ApiService, Test} from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  testValue: Observable<Test> = this.api.getTest()

  constructor(
    private api: ApiService,
  ) {}
}
