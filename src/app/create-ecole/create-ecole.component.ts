import { Component, Input, OnInit } from '@angular/core';
import { Ecole } from '../interface/ecole';
import { HttpClient } from '@angular/common/http';
import { EcolesService } from '../service/ecoles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ecole',
  templateUrl: './create-ecole.component.html',
  styleUrls: ['./create-ecole.component.css']
})
export class CreateEcoleComponent implements OnInit {
  [x: string]: any;
  
  @Input() listecoles: any[] = [];
  ecoles:any;
  

  

  constructor(private ecoleservice:EcolesService,
    private router: Router){}


  ngOnInit() {
   
    this.ecoles= this.ecoleservice.getEcoles().subscribe(data=>this.ecoles=data);
  }

  private getEcoles(){
    this.ecoleservice.getEcoles().subscribe(data=>{
      this.ecoles=data;

    });
      
  }
  detailEcole(id:number){
    this.router.navigate(['detailecoles', id]);
  }

  updateEcole(id:number){
    this.router.navigate(['updateecoles', id]);
  }

  deleteEcole(id:number){
    this.ecoleservice.deleteEcole(id).subscribe(data=>{
      console.log(data);
      this.getEcoles();

    })
  }

  


}
