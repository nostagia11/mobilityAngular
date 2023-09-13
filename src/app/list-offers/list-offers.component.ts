import { Component, OnInit } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent implements OnInit {
  
  offers:any;
  constructor(private offerService: OffersService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.offerService.getOffers().subscribe(data=>this.offers=data);

  }

  private getOffers(){
    this.offerService.getOffers().subscribe(data=>{
      this.offers=data}
      );
  }

  detailOffer(id:number){
    this.router.navigate(['detailoffer',id]);
  }

  updateOffer(id:number){
    this.router.navigate(['updateoffer',id]);
  }

   deleteOffer(id:number){
    this.offerService.deleteOffer(id).subscribe(data=>{
      console.log(data);
      this.getOffers();
    });
  }



}
