import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { AutheticationService } from '../service/authetication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  message:any = '';
  displayMessage = false;
  users:any;

  constructor(private httpService: HttpclientService, private authenticationService:AutheticationService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('username') === null)
      this.router.navigate(['login']);

  }

  getValue(){
    this.displayMessage = !this.displayMessage;
    
    if(this.displayMessage){
      this.httpService.getDemoValue().subscribe(
        data=>{
          this.message = data;
          console.log("---"+this.message);
          
        }
      );
    }
    
    
  }

}
