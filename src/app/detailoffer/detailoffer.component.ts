import { Component, OnInit } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { ActivatedRoute } from '@angular/router';
import { Offers } from '../interface/offers';

@Component({
  selector: 'app-detailoffer',
  templateUrl: './detailoffer.component.html',
  styleUrls: ['./detailoffer.component.css']
})
export class DetailofferComponent implements OnInit {
  id!: number;
  offer: Offers = new Offers;

  constructor(private offerService: OffersService,
              private route:ActivatedRoute
    ){}
 
 
 
 
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.offer = new Offers();
      this.offerService.getOfferById(this.id).subscribe(data=>{
        this.offer = data;
      })
    
  }


  

}
