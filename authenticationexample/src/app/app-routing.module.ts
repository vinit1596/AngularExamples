import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent},
  {path:"", component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
