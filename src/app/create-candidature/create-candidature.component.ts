import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Candidature } from '../interface/condidature';
import { CandidatureService } from '../service/candidature.service';

@Component({
  selector: 'app-create-candidature',
  templateUrl: './create-candidature.component.html',
  styleUrls: ['./create-candidature.component.css']
})
export class CreateCandidatureComponent {
  candidature:  Candidature = new Candidature();

  constructor(private candidatureService:CandidatureService,
              private router: Router){}


  ngOnInit():void {}

 
  saveEcole(){
    this.candidatureService.createCandidature(this.candidature).subscribe(data =>{
      console.log(data);
      this.goToCandList();
    },
    error => console.log(error));
    
  }

  goToCandList(){
    this.router.navigate(['/candidatures']);
  }

  OnSubmit(){
    console.log(this.candidature);
    this.saveEcole();
  }

}
