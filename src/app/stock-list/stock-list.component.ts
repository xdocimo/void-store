import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { productService } from '../products/productsservice.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {

  products: any;

  constructor(public productservice: productService) {}
  ngOnInit() {
  this.getItems()
  }

  getItems() {
    this.productservice.getProducts().subscribe((products: any) => {
      this.products = products
      console.log(this.products)
      const dataSource = new MatTableDataSource(products);
      this.dataSource = dataSource
    });
  }

  displayedColumns: string[] = ['id', 'name', 'stock'];
  dataSource: any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

