import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { AppRoutingModule }                     from './app-routing.module';
import { AppComponent }                         from './app.component';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';

import { NotFoundComponent }                    from './pages/not-found/not-found.component';
import { ShoppingComponent }                    from './pages/shopping/shopping.component';
import { LoginComponent }                       from './pages/login/login.component';

import { AuthInterceptor }                      from './interceptor/auth.interceptor';
import { MaterialModule }                       from './shared/material/material.module';

import { FooterComponent }                      from './shared/footer/footer.component';
import { MainNavComponent }                     from './shared/main-nav/main-nav.component';
import { LayoutModule }                         from '@angular/cdk/layout';
import { CarrouselComponent } from './shared/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    NotFoundComponent,
    FooterComponent,
    MainNavComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
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
