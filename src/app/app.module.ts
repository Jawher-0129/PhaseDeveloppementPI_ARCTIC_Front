import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompteBancaireComponent } from './add-compte-bancaire/add-compte-bancaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComptebancaireComponent } from './list-comptebancaire/list-comptebancaire.component';
import { DetailscomptebancaireComponent } from './detailscomptebancaire/detailscomptebancaire.component';
import { QRCodeModule } from 'angularx-qrcode';
import { UpdatecomptebancaireComponent } from './updatecomptebancaire/updatecomptebancaire.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { AddPaiementComponent } from './add-paiement/add-paiement.component';
@NgModule({
  declarations: [
    AppComponent,
    AddCompteBancaireComponent,
    ListComptebancaireComponent,
    DetailscomptebancaireComponent,
    UpdatecomptebancaireComponent,
    AddReservationComponent,
    AddPaiementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule
    
    
    

    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
