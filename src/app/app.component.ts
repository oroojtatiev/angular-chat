import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterOutlet} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {ApiService, Test} from './services/api.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService],
})
export class AppComponent {
  title = 'chat-frontend'
  testValue: Observable<Test> = this.api.getTest()

  constructor(private api: ApiService) {}
}
