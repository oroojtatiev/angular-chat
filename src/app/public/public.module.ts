import {NgModule} from '@angular/core'
import {PublicRoutingModule} from './public-routing.module'
import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'

@NgModule({
  declarations: [],
  imports: [
    PublicRoutingModule,
    RegisterComponent,
    LoginComponent,
  ]
})
export class PublicModule {}
