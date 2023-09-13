import { Component, OnInit } from '@angular/core';
import { Ecole } from '../interface/ecole';
import { ActivatedRoute } from '@angular/router';
import { EcolesService } from '../service/ecoles.service';

@Component({
  selector: 'app-detail-ecole',
  templateUrl: './detail-ecole.component.html',
  styleUrls: ['./detail-ecole.component.css']
})
export class DetailEcoleComponent implements OnInit {

  id!: number
  ecole: Ecole = new Ecole;


  constructor(private route:ActivatedRoute, 
    private ecoleService:EcolesService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ecole=new Ecole();
    this.ecoleService.getEcoleById(this.id).subscribe(data=>{
      this.ecole = data;
      
    });

  }

  

}
