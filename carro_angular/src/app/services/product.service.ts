import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/productmodel';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProductsById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAll() {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }


  getProductsByName(productname:string) {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos/productsByName?name=${productname}`);
  }



  getById(id: number) {

   console.log("llame al producto");
const productmaluma= this.http.get<Producto>(`${this.apiUrl}/productos/getById/${id}`);
console.log(productmaluma);
    return productmaluma;
  }

  create(prod: Producto) {
    return this.http.post(`${this.apiUrl}/productos`, prod);
  }

  update(prod: Producto) {
    return this.http.put(`${this.apiUrl}/productos`, prod);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/productos/${id}`);
  }
}
