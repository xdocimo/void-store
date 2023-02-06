// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class productService {
  constructor(private http: HttpClient, private cookies: CookieService) { }

  getProduct(id: any) {
    return this.http.get("http://localhost:4200/products1/" + id);
  }

  deleteProduct(id: any) {
    return this.http.delete("http://localhost:4200/products1/" + id);
  }

  getProducts() {
    return this.http.get("http://localhost:4200/products1");
  }

  createProduct(name: any, description: any, price: any, provider: any, stock: any, image: any) {
    var product: any = {}
    product = { name: name, description: description, price: price, provider: provider, stock: stock, photo: image }
    console.log(product)
    return this.http.post("http://localhost:4200/products1", product);
  }

  editProduct(id: any, name: any, description: any, price: any, provider: any, stock: any, image: any) {
    var product: any = {}
    console.log(id)
    product = { name: name, description: description, price: price, provider: provider, stock: stock, photo: image }
    console.log(product)
    return this.http.put("http://localhost:4200/products1/" + id, product);
  }

// PARA OBTENER LA LISTA DE CUSTOMERS, AS A BONUS. USING A PUBLIC API INSTEAD OWN ya que no tenemos registro y login porque no se pide.
getCustomers() {
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}
}
