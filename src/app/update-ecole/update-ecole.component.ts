import { Component, OnInit } from '@angular/core';
import { EcolesService } from '../service/ecoles.service';
import { Ecole } from '../interface/ecole';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ecole',
  templateUrl: './update-ecole.component.html',
  styleUrls: ['./update-ecole.component.css']
})
export class UpdateEcoleComponent implements OnInit {

  
  id!: number;
  ecole: Ecole = new Ecole();
  constructor(private ecoleService:EcolesService,
    private route : ActivatedRoute,
    private router: Router){}

  ngOnInit() : void {
    this.id = this.route.snapshot.params['id'];
    this.ecoleService.getEcoleById(this.id).subscribe(data=>{
      this.ecole = data;

    },error=>console.log(error));

  }

  OnSubmit(){
    this.ecoleService.updateEcole(this.id,this.ecole).subscribe(data=>{
      this.goToEcoleList()
    },
    error=>console.log(error));
  }


  goToEcoleList(){
    this.router.navigate(['/ecoles']);
  }

}
