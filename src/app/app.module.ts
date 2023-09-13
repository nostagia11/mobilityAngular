import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { EcolesService } from './service/ecoles.service';
import { CreateEcoleComponent } from './create-ecole/create-ecole.component';
import { EcolesComponent } from './ecoles/ecoles.component';
import { UpdateEcoleComponent } from './update-ecole/update-ecole.component';
import { DetailEcoleComponent } from './detail-ecole/detail-ecole.component';
import { ListOffersComponent } from './list-offers/list-offers.component';
import { UpdateOoferComponent } from './update-oofer/update-oofer.component';
import { DetailofferComponent } from './detailoffer/detailoffer.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { DropdownComponent } from './dropdown/dropdown.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { ListCandidatureComponent } from './list-candidature/list-candidature.component';
import { DetailCandidatureComponent } from './detail-candidature/detail-candidature.component';
import { UpdateCandidatureComponent } from './update-candidature/update-candidature.component';
import { CreateCandidatureComponent } from './create-candidature/create-candidature.component';
import { ListResultatComponent } from './list-resultat/list-resultat.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';


@NgModule({
  declarations: [
    AppComponent,
    
    CreateEcoleComponent,
    EcolesComponent,
    UpdateEcoleComponent,
    DetailEcoleComponent,
    ListOffersComponent,
    UpdateOoferComponent,
    DetailofferComponent,
    CreateOfferComponent,
    ListCandidatureComponent,
    DetailCandidatureComponent,
    UpdateCandidatureComponent,
    CreateCandidatureComponent,
    ListResultatComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [EcolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
