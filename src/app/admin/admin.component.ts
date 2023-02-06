import { Component } from '@angular/core';
import { productService } from "../products/productsservice.service"


@Component({
  selector: 'AdminComponent',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent {

  items: any
  finalx: any
  products: any
  testeandoparse: any


  ngOnInit() {
    this.getItems()
  }


  // Obtenemos los productos para mostrar la cantidad
  getItems() {
    this.productService.getProducts().subscribe(products => {
      console.log(this.items)
      this.products = products

    });


  }

  constructor(public productService: productService) {

  }
}