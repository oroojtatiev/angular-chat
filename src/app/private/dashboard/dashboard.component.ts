import {Component, Signal} from '@angular/core'
import {toSignal} from '@angular/core/rxjs-interop'
import {ApiService} from '../../services/api.service'

@Component({
  imports: [],
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(
    private readonly apiService: ApiService,
  ) {}

  username: Signal<string | null> = toSignal(this.apiService.getUsername(), {initialValue: null})
}
