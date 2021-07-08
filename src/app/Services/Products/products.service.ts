import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsI } from 'src/app/Models/Products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = "https://localhost:44346/api/"

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<ProductsI[]>{
    let direccion = this.url + "Products";
    return this.http.get<ProductsI[]>(direccion);
  }

  AddProducts(form:ProductsI):Observable<ProductsI[]>{
    let direccion = this.url;
    return this.http.post<ProductsI[]>(direccion,form);
  }
}
