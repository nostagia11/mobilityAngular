import { Component, OnInit } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offers } from '../interface/offers';
import { EcolesService } from '../service/ecoles.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-oofer',
  templateUrl: './update-oofer.component.html',
  styleUrls: ['./update-oofer.component.css']
})
export class UpdateOoferComponent implements OnInit {
  id!: number;
  offer: Offers = new Offers();
  ecoles:any
  selecuni!: FormGroup<{ selecteduni: FormControl<any>; }>;

 

  constructor(private offerService: OffersService,
    private router: Router,
    private route: ActivatedRoute,
    private ecoleservice:EcolesService){}
  
  
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offerService.getOfferById(this.id).subscribe(data=>{
      this.offer = data;
    }, error=>console.log(error));
    

    this.ecoleservice.getEcoles().subscribe(data=>{
      this.ecoles=data;

    });
    const initialize=this.ecoles.name;
    this.selecuni= new FormGroup({
      selecteduni:new FormControl(initialize)
    });

    
  }

  

  OnSubmit(){
    this.offerService.updateOffer(this.id,this.offer).subscribe(data=>{
      this.goToOfferList()
    },
    error=>console.log(error));
  }
  
  
  goToOfferList() {
    this.router.navigate(['/offers']);
  }
  private getEcoles(){
    this.ecoleservice.getEcoles().subscribe(data=>{
      this.ecoles=data;
      // this.ecoles=this.ecoles.concat(data);

    });



  


}
}
