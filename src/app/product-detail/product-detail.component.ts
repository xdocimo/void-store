import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { productService } from '../products/productsservice.service';
import { Router } from "@angular/router"

// EDIT RELATED

interface IUser {
  id: string;
  name: string;
  description: string;
  price: string;
  provider: string;
  stock: string;
  image: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent {
  // Haremos que el botón solo sea usado una vez para mayor comodidad.
  onlyOneAction: any;
  // ----------------------------
  items: any
  letsgoedit: any;
  changeforbutton: any;
  products: any
  testeandoparse: any
  enlazar: any
  productodata: any
  // EDIT RELATED
  defaultvalues: any;
  reactiveForm!: FormGroup;
  user: IUser;
  popup2: any;
  productvalues: any;
  // DELETE RELATED
  popup: any;


  ngOnInit() {
    this.getItems()
    this.popup = false;
    this.changeforbutton = true;
    // EDIT RELATED (PARA EL FORM)
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

  // OBTIENE DATOS DE LOS PRODUCTOS PARA MOSTRARLOS A LA HORA DE DROPDOWN

  getItems() {
    this.productservice.getProducts().subscribe(products => {
      this.products = products
    });
  }

  // funcion de borrado

  confirm() {
    this.productservice.deleteProduct(this.enlazar).subscribe(data => {
      console.log(data)
    })
    setTimeout(() => {
      window.location.href = ""
      this.popup = false;
    }, 2000);
  }

  deleteItem(){
    this.popup = true;
  }

  cancel(){
    this.popup = false;
  }

  isSubmitted = false;
  constructor(public fb: FormBuilder, public productservice: productService, private router: Router) {
    this.user = {} as IUser;
  }
  registrationForm = this.fb.group({
    productName: ['', [Validators.required]],
  });
  productName = '';

  // GUARDA LA ID SELECCIONADA PARA QUE AL CLICKEAR EL BOTON SEA DE FACIL OBTENCIÓN

  onSelected(): void {
    console.log(this.enlazar);
    this.changeforbutton = true;
    if (this.onlyOneAction) {
      this.onSubmit()
    }
  }


  // AL CLICKEAR EL BOTON ACCIONA

  onSubmit(): void {
    if (this.enlazar) {
    this.onlyOneAction = true;
    this.changeforbutton = false;
    this.letsgoedit = false;
    this
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      this.productservice.getProduct(this.enlazar).subscribe(data => {
        console.log(data)
        this.productodata = data
      })
    }
  }
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

  // FUNCIÓN DE EDIT
  
  editItem(id: any) {
    this.changeforbutton = false;
    this.isSubmitted = false;
    this.letsgoedit = true;
    // SE CREA UN ARRAY CON LOS VALORES ACTUALES DEL ITEM SELECCIONADO PARA EL FORM
    this.productvalues = {
      name: this.productodata.name,
      description: this.productodata.description,
      price: this.productodata.price,
      provider: this.productodata.provider,
      stock: this.productodata.stock,
      image: this.productodata.photo
    }
    // ENVIAMOS EL ARRAY CON LOS VALORES AL FORMULARIO PARA QUE SE LOS MUESTRE AL USUARIO
    this.reactiveForm.patchValue(this.productvalues)
  }

  validate(): any {
    this.popup2 = true;
  }

  cancel2(){
    this.popup2 = false;
  }



  // VALIDACION DEL EDIT Y ENVIO A LA BASE DE DATOS :)

  public validate2(): any {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
    }

    this.user = this.reactiveForm.value;
    this.productservice.editProduct(this.enlazar, this.user.name, this.user.description, this.user.price, this.user.provider, this.user.stock, this.user.image).subscribe(data => {
      console.log(data)
    })
    setTimeout(() => {
      window.location.href = ""
    }, 1000);

  }
}
