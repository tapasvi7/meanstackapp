import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path: "login", component : LoginComponent},
  { path: "user/register", component : RegisterComponent},
  { path : "aboutus", component: AboutusComponent},
  {path : "admin",
      children: [
        {path : "dashboard", component : AdmindashboardComponent},
        {path :"profile", component: AdminprofileComponent}
      ]
  },
  {path : "user",
      children: [
        {path : "dashboard", component : UserdashboardComponent},
        {path :"profile", component: UserprofileComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
