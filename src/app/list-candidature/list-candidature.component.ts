import { Component } from '@angular/core';
import { CandidatureService } from '../service/candidature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-candidature',
  templateUrl: './list-candidature.component.html',
  styleUrls: ['./list-candidature.component.css']
})
export class ListCandidatureComponent {
  candidatures:any;
  constructor(private candidatureservice: CandidatureService,
    private router: Router){}
  
  
  ngOnInit(): void {
    this.candidatureservice.getCandidatures().subscribe(data=>this.candidatures=data);

  }

  private getcandidatures(){
    this.candidatureservice.getCandidatures().subscribe(data=>{
      this.candidatures=data}
      );
  }

  detailCandidature(id:number){
    this.router.navigate(['detailCandidature',id]);
  }

  updateCandidature(id:number){
    this.router.navigate(['updateCandidature',id]);
  }

   deleteCandidature(id:number){
    this.candidatureservice.deleteCandidature(id).subscribe(data=>{
      console.log(data);
      this.getcandidatures();
    });
  }
}
