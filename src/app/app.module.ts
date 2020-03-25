import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { NgxLocalStorageModule } from 'ngx-localstorage';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SessionTokenInterceptor } from './authentication/session-token.interceptor';
import { ProductModalComponent } from './product/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductEditComponent,
    LoginComponent,
    LogoutComponent,
    ProductModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxLocalStorageModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SessionTokenInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
