import { Component, Input, OnInit } from '@angular/core';
import { Ecole } from '../interface/ecole';
import { EcolesService } from '../service/ecoles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecoles',
  templateUrl: './ecoles.component.html',
  styleUrls: ['./ecoles.component.css']
})
export class EcolesComponent implements OnInit {


  
  ecole: Ecole = new Ecole();

  constructor(private ecoleService:EcolesService,
              private router: Router){}


  ngOnInit():void {}

 
  saveEcole(){
    this.ecoleService.createEcole(this.ecole).subscribe(data =>{
      console.log(data);
      this.goToEcoleList();
    },
    error => console.log(error));
    
  }

  goToEcoleList(){
    this.router.navigate(['/ecoles']);
  }

  OnSubmit(){
    console.log(this.ecole);
    this.saveEcole();
  }

}
