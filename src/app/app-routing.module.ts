import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEcoleComponent } from './create-ecole/create-ecole.component';
import { EcolesComponent } from './ecoles/ecoles.component';
import { UpdateEcoleComponent } from './update-ecole/update-ecole.component';
import { DetailEcoleComponent } from './detail-ecole/detail-ecole.component';
import { ListOffersComponent } from './list-offers/list-offers.component';
import { UpdateOoferComponent } from './update-oofer/update-oofer.component';
import { DetailofferComponent } from './detailoffer/detailoffer.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ListCandidatureComponent } from './list-candidature/list-candidature.component';
import { DetailCandidatureComponent } from './detail-candidature/detail-candidature.component';
import { UpdateCandidatureComponent } from './update-candidature/update-candidature.component';
import { CreateCandidatureComponent } from './create-candidature/create-candidature.component';
import { ListResultatComponent } from './list-resultat/list-resultat.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  //login
  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegistrationComponent },
   // candidature routes
  {path: 'candidatures', component: ListCandidatureComponent },
  {path: 'addcand', component: CreateCandidatureComponent },
  {path: 'updateCandidature/:id', component: UpdateCandidatureComponent },
  {path: 'detailCandidature/:id', component: DetailCandidatureComponent },
  // ecole routes
  {path: 'ecoles', component: CreateEcoleComponent },
  {path: 'addecoles', component: EcolesComponent },
  {path: 'updateecoles/:id', component: UpdateEcoleComponent },
  {path: 'detailecoles/:id', component: DetailEcoleComponent },
  // offers routes
  {path: 'offers', component: ListOffersComponent },
  {path: 'addoffer', component: CreateOfferComponent },
  {path: 'updateoffer/:id', component: UpdateOoferComponent },
  {path: 'detailoffer/:id', component: DetailofferComponent },
  

  //resultat
  {path: 'resultat', component: ListResultatComponent },

  

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
