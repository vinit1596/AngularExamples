import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[];
  

  constructor(private httpService:HttpclientService, private router:Router) {
    if(sessionStorage.getItem('username') === null)
      this.router.navigate(['login']);
   }

  ngOnInit() {
    this.httpService.getAllProducts().subscribe(
      data=>{
        this.products = data;
      }
    );
  }

  
}
