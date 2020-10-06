import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { AllTheatresComponent } from './Components/all-theatres/all-theatres.component';
import { CreateComponent } from './Components/create/create.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
{
  path:"search", component:SearchComponent
} ,
{
  path:"all-theatres",component:AllTheatresComponent
},
{
  path:"create",component:CreateComponent
},
{
  path:"home", component:HomeComponent
},
{
  path:"",redirectTo:"home" ,pathMatch:"full"
},
{
  path:"**",component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
