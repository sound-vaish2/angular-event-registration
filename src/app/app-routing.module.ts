import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './nav-bar/home/home.component';
import { RegistrationComponent } from './nav-bar/registration/registration.component';
import { DetailsComponent } from './nav-bar/details/details.component';
const routes: Routes = [
  // {path:"", component:NavBarComponent},
   {
    path:"",
    component:HomeComponent
  },

  {
    path:"registration",
    component: RegistrationComponent
  },
{
    path:"details",
    component:DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } //export const
//RoutingComponent = [HomeComponent,RegistrationComponent,DetailsComponent];//Removed NavBarComponent,
