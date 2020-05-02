import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../service/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentictionService:AutheticationService, private router:Router) { }

  ngOnInit() {
    this.authentictionService.logOut();
    this.router.navigate(['login']);
  }

}
