import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-target',
  templateUrl: './product-target.component.html',
  styleUrls: ['./product-target.component.css']
})
export class ProductTargetComponent implements OnInit {
  @Input() producto: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public detalles() {
    this.router.navigate(["/producto/detalle", this.producto.idProduct])
  }
}
