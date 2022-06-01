import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path:'', component: CustomersComponent },
  { path:'login-page', component: LoginPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
