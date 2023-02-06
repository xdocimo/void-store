// app.routing.ts

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { IndexViewComponent } from "./index-view/index-view.component";
import { AdminComponent } from "./admin/admin.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CustomersListComponent  } from "./customers-list/customers-list.component";
import { StockListComponent } from "./stock-list/stock-list.component";

type PathMatch = "full" | "prefix" | undefined;

const appRoutes = [
  { path: "", component: IndexViewComponent, pathMatch: "full" as PathMatch },
  { path: "admin", component: AdminComponent, pathMatch: "full" as PathMatch},
  { path: "addproduct", component: AddProductComponent, pathMatch: "full" as PathMatch},
  { path: "pdetail", component: ProductDetailComponent, pathMatch: "full" as PathMatch},
  { path: "viewproducts", component: ProductListComponent, pathMatch: "full" as PathMatch},
  { path: "customers", component: CustomersListComponent, pathMatch: "full" as PathMatch},
  { path: "stock", component: StockListComponent, pathMatch: "full" as PathMatch},
];
export const routing = RouterModule.forRoot(appRoutes);