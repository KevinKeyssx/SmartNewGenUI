import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent }         from './pages/login/login.component';
import { NotFoundComponent }      from './pages/not-found/not-found.component';
import { ShoppingComponent }      from './pages/shopping/shopping.component';

const routes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'shopping',   component: ShoppingComponent },
  { path: '**',         component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
