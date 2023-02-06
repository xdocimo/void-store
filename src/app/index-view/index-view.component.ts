import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { productService } from "../products/productsservice.service"


@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css'],
  styles: [':host {z-index: 1};']
})


export class IndexViewComponent {

  popup: any;

  items: any
  products: any
  testeandoparse: any


  ngOnInit() {
    this.getItems()
  }


  // Obtenemos los items para mostrarlos

  getItems() {
    this.productService.getProducts().subscribe(products => {
      console.log(this.items)
      this.products = products
    });

    
  }

  comprar(){
    this.popup = true;
  }

  cancel(){
    this.popup = false;
  }

  constructor(public productService: productService) {

  }
}