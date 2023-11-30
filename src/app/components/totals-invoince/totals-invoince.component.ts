import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { MatDialog } from '@angular/material/dialog';
import { InvoicesPageMainComponent } from '../../pages/invoices-page-main/invoices-page-main.component';

@Component({
  selector: 'app-totals-invoince',
  templateUrl: './totals-invoince.component.html',
  styleUrls: ['./totals-invoince.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class TotalsInvoinceComponent implements OnInit {
  @Input() formDetailsPayment!: FormGroup;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {

  }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-28
    * Metodo que agrega o elimina uno de los campos pasados por parametro.
    * @param state Tipo de accion
    * @param name Nombre del campo
  */
  showOrHideFieldTaxOrShipping(state: boolean, name: string): void {
    if (state) {
      this.formDetailsPayment.addControl(name, new FormControl('', [Validators.required, Validators.min(1)]));
    } else {
      if (name === 'shipment') this.calculateTotalWithShipment(null);
      if (name === 'tax') this.calculateTotalWithTax(null);
      this.formDetailsPayment.removeControl(name);
    }
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-28
    * Metodo que calcula el total si hay un descuento registrado.
    * @param $event Evento emitido por el input
  */
  calculateTotalWithDiscount($event: Event): void {
    const discount = Number(($event.target as HTMLInputElement).value);
    const subtotal = Number(this.formDetailsPayment.get('subtotal')?.value);
    const total = (subtotal - ((subtotal * discount) / 100)).toFixed(2);
    this.formDetailsPayment.get('total')?.setValue(total);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-28
    * Metodo que calcula el saldo adeudado a traves de la cantidad pagada.
    * @param $event Evento emitido por el input
  */
  calculateBalanceDue($event: Event): void {
    const amountPaid = Number(($event.target as HTMLInputElement).value);
    const total = this.formDetailsPayment.get('total')?.value;
    const balanceDue = (total - amountPaid).toFixed(2);
    this.formDetailsPayment.get('balanceDue')?.setValue(balanceDue);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-28
    * Metodo que suma al total el costo del envio.
    * @param $event Evento emitido por el input
  */
  calculateTotalWithShipment($event: Event | null): void {
    const shipment = $event ? Number(($event?.target as HTMLInputElement).value) : Number(this.formDetailsPayment.get('shipment')?.value);
    const total = Number(this.formDetailsPayment.get('total')?.value);
    const newTotal = $event ? (shipment + total).toFixed(2) : (total - shipment).toFixed(2);
    this.formDetailsPayment.get('total')?.setValue(newTotal);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-28
    * Metodo que suma al total el impuesto generado.
    * @param $event Evento emitido por el input
  */
  calculateTotalWithTax($event: Event | null): void {
    const tax = $event ? Number(($event?.target as HTMLInputElement).value) : Number(this.formDetailsPayment.get('tax')?.value);
    const total = Number(this.formDetailsPayment.get('total')?.value);
    const newTotal = $event ? (total + ((tax * total) / 100)).toFixed(2) : (total - ((tax * total) / 100)).toFixed(2);
    this.formDetailsPayment.get('total')?.setValue(newTotal);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-30
    * Metodo que abre la modal para vizualizar las facturas registradas.
  */
  onClickViewInvoices(): void {
    this.matDialog.open(InvoicesPageMainComponent, {
      width: '70%'
    });
  }
}