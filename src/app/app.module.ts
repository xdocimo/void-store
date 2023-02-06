import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./app.routing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { IndexViewComponent } from './index-view/index-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CustomersListComponent } from './customers-list/customers-list.component';
import {firstValueFrom} from 'rxjs';
import { StockListComponent } from './stock-list/stock-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexViewComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    AddProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    CustomersListComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
