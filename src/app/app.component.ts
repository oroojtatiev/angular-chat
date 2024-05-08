import {Component} from '@angular/core'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Observable} from 'rxjs'
import {ApiService, Test} from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  testValue: Observable<Test> = this.api.getTest()

  constructor(
    private api: ApiService,
    private _snackBar: MatSnackBar,
  ) {}
}
