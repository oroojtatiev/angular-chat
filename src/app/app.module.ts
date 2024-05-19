import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInput} from '@angular/material/input'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {JwtModule} from '@auth0/angular-jwt'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        // allowedDomains: ["example.com"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInput,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
