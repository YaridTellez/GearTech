import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsC, ProductsI } from 'src/app/Models/Products.interface';
import { ProductsService } from 'src/app/Services/Products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 productNew = new ProductsC();
 @ViewChild("foto", {
   read: ElementRef
 }) foto: ElementRef;

  constructor(
    private apiProducts: ProductsService
    , private snackBar: MatSnackBar
  ) { }

  public cargando = false;

  
  async add(){
    if(!this.productNew.productName){
      return alert("Ingresa Nombre del prodcuto");
    }
    if(!this.productNew.productPrice){
      return alert("Ingresa Precio del prodcuto");
    }
    if(!this.productNew.productStock){
      return alert("Ingresa Cantidad del prodcuto");
    }
    if(!this.productNew.idCategory){
      return alert("Ingresa Categoria del prodcuto");
    }
    let archiv = this.foto.nativeElement.files;
    if(!archiv.length){
      return alert("Ingresa Imagen del producto");
    }
    this.cargando = true;
    // guarda prodcuto
    
    
    const fd = new FormData();
    for (let x = 0; x < archiv.length; x++){
      fd.append(`foto_${x}`, archiv[x])
    }
    console.log('fb',fd)

    this.apiProducts.AddProducts(this.productNew);
    this.snackBar.open("Producto guardado", "", {
      duration: 1500,
      horizontalPosition: "start",
      verticalPosition: "top",
    });

    this.cargando = false;
    this.productNew = new ProductsC();
    this.foto.nativeElement.value = "";
  }

  ngOnInit(): void {
   
  }

}
