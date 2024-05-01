import {Component} from '@angular/core'
import {ApiService, Test} from './services/api.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent {
  title = 'chat-frontend'
  testValue: Observable<Test> = this.api.getTest()

  constructor(private api: ApiService) {}
}
