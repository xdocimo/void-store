import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { productService } from '../products/productsservice.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent {

  products: any;

  constructor(public productservice: productService) {}
  ngOnInit() {
  this.getItems()
  }

  getItems() {
    this.productservice.getCustomers().subscribe((products: any) => {
      this.products = products
      console.log(this.products)
      const dataSource = new MatTableDataSource(products);
      this.dataSource = dataSource
    });
  }

  displayedColumns: string[] = ['id', 'username', 'name', 'email'];
  dataSource: any

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
