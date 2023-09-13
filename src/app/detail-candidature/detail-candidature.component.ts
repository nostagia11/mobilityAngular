import { Component } from '@angular/core';
import { Candidature } from '../interface/condidature';
import { CandidatureService } from '../service/candidature.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-candidature',
  templateUrl: './detail-candidature.component.html',
  styleUrls: ['./detail-candidature.component.css']
})
export class DetailCandidatureComponent {
 
  id!: number;
  cond: Candidature = new Candidature;

  constructor(private candidatureService: CandidatureService,
              private route:ActivatedRoute
    ){}
 
 
 
 
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.cond = new Candidature();
      this.candidatureService.getCandidatureById(this.id).subscribe(data=>{
        
        this.cond = data;
        
      });
    
  }

}
