import { Component, Input, OnInit, Output } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { Offers } from '../interface/offers';
import { Router } from '@angular/router';
import { EcolesService } from '../service/ecoles.service';
import { Ecole } from '../interface/ecole';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit{

  
  
  
  offer: Offers = new Offers();
  nameecole!: String;
  ecoles:any
  selectedecole?: Ecole;
    

  constructor(private offerService: OffersService,
              private router:Router,
              private ecoleservice:EcolesService
             ){}
  
  
    ngOnInit(): void {
      this.ecoleservice.getEcoles().subscribe(data=>{
        this.ecoles=data;
  
      });
  
      }
      
  

  
  
  



  saveOffer(){
    this.offer.ecoles=this.selectedecole!;
    this.offerService.createOffer(this.offer).subscribe(data=>{
    
      
      this.goToOfferList();
    })
  }
  goToOfferList(){
    this.router.navigate(['/offers']);
  }

  OnSubmitOffer(createoffer: NgForm){
    console.log(this.offer,createoffer.value);
    this.saveOffer();
  }
  private getEcoles(){
    this.ecoleservice.getEcoles().subscribe(data=>{
      this.ecoles=data;
      // this.ecoles=this.ecoles.concat(data);

    });

}
selected(e:Ecole):Ecole{
  console.log(e);
  this.selectedecole=<Ecole>e
  return this.selectedecole;
}

selectedCompare(value:any,option:any):boolean{
  return value.id===option.id

}
}
