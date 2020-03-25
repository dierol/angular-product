import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { AuthenticationGuard } from './authentication/authentication.guard';
import { CanDeactivateGuard } from './product/can-deactivate.guard';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'products/:id',
    component: ProductEditComponent,
    canActivate: [ AuthenticationGuard ],
    canDeactivate: [ CanDeactivateGuard ]
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [ AuthenticationGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
