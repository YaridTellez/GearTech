import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/Products/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public productos = [];
  
  constructor(
    public apiPro:ProductsService 
    ,private router:Router
  ) { }

  ngOnInit(): void {
    this.apiPro.getAllProducts().subscribe(pro =>{
      this.productos = pro;
      console.log(pro) 
    })
  }

}
