import { BrowserModule }                        from '@angular/platform-browser';
import { NgModule }                             from '@angular/core';
import { AppRoutingModule }                     from './app-routing.module';
import { AppComponent }                         from './app.component';
import { LoginComponent }                       from './pages/login/login.component';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { ShoppingComponent }                    from './pages/shopping/shopping.component';
import { NotFoundComponent }                    from './pages/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
import { AuthInterceptor }                      from './interceptor/auth.interceptor';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
