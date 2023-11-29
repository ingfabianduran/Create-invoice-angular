import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { Products, Product } from 'src/app/interfaces/interfaces';
import { ProductService } from 'src/app/services/product.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-articles-invoince',
  templateUrl: './articles-invoince.component.html',
  styleUrls: ['./articles-invoince.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class ArticlesInvoinceComponent implements OnInit {
  @Input() formInvoice!: FormGroup;
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.addItemInvoice();
  }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-27
    * Metodo que retorna el form array del formulario principal.
  */
  get itemsInvoice(): FormArray {
    return this.formInvoice.get('itemsInvoice') as FormArray;
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-27
    * Metodo que agrega un item a la lista de items invoice.
  */
  addItemInvoice(): void {
    const item = new FormGroup({
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl({ value: '', disabled: true }, []),
      total: new FormControl({ value: '', disabled: true }, [])
    });
    this.itemsInvoice.push(item);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-27
    * Metodo que elimina un item a la lista de items invoice.
  */
  removeItemInvoice(index: number): void {
    this.itemsInvoice.removeAt(index);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que retorna los productos registrados en el sistema.
  */
  getProducts(): void {
    this.productService.getProducts().subscribe((res: Products) => {
      this.products = res.products;
    });
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que retorna la informacion del producto seleccionado.
    * @param $event Evento emitido por el select
    * @param index Indice del campo seleccionado
  */
  onSelectProduct($event: MatSelectChange, index: number): void {
    this.productService.getProductById($event.value).subscribe((res: Product) => {
      this.itemsInvoice.at(index).get('price')?.setValue(res.price);
      this.itemsInvoice.at(index).get('quantity')?.setValue('');
      this.itemsInvoice.at(index).get('total')?.setValue('');
      this.itemsInvoice.at(index).markAllAsTouched();
    });
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que calcula el total a traves de la cantidad y precio del producto seleccionado. 
    * @param $event Evento emitido por el input
    * @param index Indice del campo seleccionado
  */
  onChangeQuantity($event: Event, index: number): void {
    const quantity: number = Number(($event.target as HTMLInputElement).value);
    const cost: number = Number(this.itemsInvoice.at(index).get('price')?.value);
    this.itemsInvoice.at(index).get('total')?.setValue(cost * quantity);
  }
}