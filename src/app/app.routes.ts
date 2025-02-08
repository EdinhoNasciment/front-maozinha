import { RouterModule, Routes } from '@angular/router';
import { FAQSComponent } from './faqs/faqs.component';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'faqs' , component:FAQSComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},

];
