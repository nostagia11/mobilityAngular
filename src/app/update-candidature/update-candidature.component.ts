import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatureService } from '../service/candidature.service';
import { Candidature } from '../interface/condidature';

@Component({
  selector: 'app-update-candidature',
  templateUrl: './update-candidature.component.html',
  styleUrls: ['./update-candidature.component.css']
})
export class UpdateCandidatureComponent {
  id!: number;
  candidature: Candidature = new Candidature();
  
  

 

  constructor(private candidatureService: CandidatureService,
    private router: Router,
    private route: ActivatedRoute,
    ){}
  
  
    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.candidatureService.getCandidatureById(this.id).subscribe(data=>{
      this.candidature = data;
    }, error=>console.log(error));
    

    
    
    

    
  }

  

  OnSubmit(){
    this.candidatureService.updateCandidature(this.id,this.candidature).subscribe(data=>{
      this.goTocandidatureList()
    },
    error=>console.log(error));
  }
  
  
  goTocandidatureList() {
    this.router.navigate(['/candidatures']);
  }
  

}
