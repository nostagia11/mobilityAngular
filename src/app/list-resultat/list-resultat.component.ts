import { Component } from '@angular/core';
import { CandidatureService } from '../service/candidature.service';
import { Router } from '@angular/router';
import { ResultserviceService } from '../service/resultservice.service';

@Component({
  selector: 'app-list-resultat',
  templateUrl: './list-resultat.component.html',
  styleUrls: ['./list-resultat.component.css']
})
export class ListResultatComponent {
  candidatures:any;

  constructor(private resultservice: ResultserviceService,
    private router: Router){}

    ngOnInit(): void {
      this.resultservice.getResultat().subscribe(data=>this.candidatures=data);
  
    }

}
