import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../service/authetication.service';
import { Router } from '@angular/router';
import { error } from 'util';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser:User = new User("","");
  isValid=true;

  constructor(private authenticationService: AutheticationService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin(){
    console.log("In checkLogin() method")
    this.authenticationService.authenticate(this.currentUser).subscribe(
      data=>{
        this.isValid=true;
        this.router.navigate([''])
      },
      error=>{
        this.isValid=false;
        console.log("invaid credentials")
      }
      
    )
    
  }

}
