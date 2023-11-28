import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-totals-invoince',
  templateUrl: './totals-invoince.component.html',
  styleUrls: ['./totals-invoince.component.css']
})
export class TotalsInvoinceComponent implements OnInit {
  @Input() formDetailsPayment!: FormGroup;

  constructor() { }

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
    if (state) this.formDetailsPayment.addControl(name, new FormControl('', [Validators.required]));
    else this.formDetailsPayment.removeControl(name);
  }
}