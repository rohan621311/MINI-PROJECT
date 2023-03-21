import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BedsComponent } from './beds/beds.component';
import { SofasloungesComponent } from './sofaslounges/sofaslounges.component';
import { DiningtableComponent } from './diningtable/diningtable.component';
import { WardrobesComponent } from './wardrobes/wardrobes.component';
import { StudytablesComponent } from './studytables/studytables.component';
import { TvunitComponent } from './tvunit/tvunit.component';
import { SinglebedComponent } from './singlebed/singlebed.component';
import { SinglesofaComponent } from './singlesofa/singlesofa.component';
import { SinglediningComponent } from './singledining/singledining.component';
import { SinglewardrobeComponent } from './singlewardrobe/singlewardrobe.component';
import { SinglestudyComponent } from './singlestudy/singlestudy.component';
import { SingletvunitComponent } from './singletvunit/singletvunit.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { NextbedComponent } from './nextbed/nextbed.component';



const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'Beds',component:BedsComponent},
  {path:'sofaslounges',component:SofasloungesComponent},
  {path:'diningtable',component:DiningtableComponent},
  {path:'Wardrobes',component:WardrobesComponent},
  { path:'studytables',component:StudytablesComponent},
  {path:'tvunit',component:TvunitComponent},
  {path:'bed/:id',component:SinglebedComponent},
  {path:'sofa/:id',component:SinglesofaComponent},
 {path:'diningtable/:id',component:SinglediningComponent},
 {path:'singlewardrobe/:id',component:SinglewardrobeComponent},
 {path:'singlestudy/:id',component:SinglestudyComponent},
 {path:'singletvunit/:id',component:SingletvunitComponent},
 {path:'cart',component:CartComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:'payment',component:PaymentComponent},
 {path:'nextbed',component:NextbedComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
