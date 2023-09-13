import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../service/registration.service';
import { _User } from '../interface/_User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  user= new  _User();
  msg='';
  constructor(private loginService:RegistrationService,
               private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loginUser(){
    this.loginService.login(this.user).subscribe(
      data=>{console.log("response received");
              },
      error=>{console.log("exception occured");
              this.msg="Bad credentials, please enter valid email and password";
    }
    );

  }
  onCandidatures(){
    this.router.navigate(['/candidatures']);
  }
  
  goToRegistration(){
    this.router.navigate(['/registration']);
  }


}
