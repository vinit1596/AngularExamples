import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptor } from './service/token-intercept';
import { ProductComponent } from './product/product.component';
import { CurrencyFormatterPipe } from './currency-formatter.pipe';
import { CurrencysymbolPipe } from './currencysymbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    LogoutComponent,
    ProductComponent,
    CurrencyFormatterPipe,
    CurrencysymbolPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
   {
     provide:HTTP_INTERCEPTORS,
     useClass: TokenInterceptor,
     multi:true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
