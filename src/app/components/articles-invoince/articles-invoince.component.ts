import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

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

  constructor() { }

  ngOnInit(): void {
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
      quantity: new FormControl('', [Validators.required]),
      price: new FormControl('', []),
      total: new FormControl('', [])
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
}