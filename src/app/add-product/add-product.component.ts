import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { productService } from '../products/productsservice.service';

interface IUser {
  name: string;
  description: string;
  price: string;
  provider: string;
  stock: string;
  image: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor(public productservice: productService) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    // Establecemos una imagen por defecto para mantener la estética de la página (Es una imagen 404)
    this.user.image = "https://i.imgur.com/flGZUDN.png"
    // Validadores below
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]),
      description: new FormControl(this.user.description, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(250),
      ]),
      price: new FormControl(this.user.price, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
      ]),
      provider: new FormControl(this.user.provider, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      stock: new FormControl(this.user.stock, [
        Validators.required,
        Validators.minLength(1),
      ]),
      image: new FormControl(this.user.image, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get description() {
    return this.reactiveForm.get('description')!;
  }

  get price() {
    return this.reactiveForm.get('price')!;
  }

  get provider() {
    return this.reactiveForm.get('provider')!;
  }

  get stock() {
    return this.reactiveForm.get('stock')!;
  }

  get image() {
    return this.reactiveForm.get('image')!;
  }

  // nos fijamos que todo esté en orden

  public validate(): any {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }

      return
    }

    this.user = this.reactiveForm.value;
    this.productservice.createProduct(this.user.name, this.user.description, this.user.price, this.user.provider, this.user.stock, this.user.image).subscribe(data => {
      console.log(data)
    })
    // cerramos la pagina una vez terminado. :)
    setTimeout(() => {
      window.location.href = ""
    }, 1000);

  }
}
