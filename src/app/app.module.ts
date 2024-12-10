import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {JwtModule} from '@auth0/angular-jwt'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'

// oroojtatiev@gmail.com password: 12345

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        // allowedDomains: ["example.com"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    AppRoutingModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
