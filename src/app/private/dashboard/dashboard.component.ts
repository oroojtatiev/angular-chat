import {Component} from '@angular/core'
import {ApiService} from '../../services/api.service'
import {Observable} from 'rxjs'
import {AsyncPipe, JsonPipe} from '@angular/common'

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
  ],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(
    private readonly apiService: ApiService,
  ) {}

  // username: Signal<string | null> = toSignal(this.apiService.getUsername(), {initialValue: null})
  username: Observable<string | null> = this.apiService.getUsername()
}
