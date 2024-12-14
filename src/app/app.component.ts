import {Component} from '@angular/core'
import {Observable} from 'rxjs'
import {ApiService} from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  helloFromAPI: Observable<string> = this.api.getTest()

  constructor(
    private api: ApiService,
  ) {}
}
