import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-invoince-page-main',
  templateUrl: './invoince-page-main.component.html',
  styleUrls: ['./invoince-page-main.component.css']
})
export class InvoincePageMainComponent implements OnInit {
  formInvoice: FormGroup = new FormGroup({
    formHeader: new FormGroup({
      logo: new FormControl(null, []),
      invoiceNumber: new FormControl(null, [Validators.required]),
      nameInvoiceFrom: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      conditionsPayment: new FormControl(null, [Validators.required]),
      billTo: new FormControl(null, [Validators.required]),
      sendTo: new FormControl(null, []),
      dueDate: new FormControl(null, [Validators.required]),
      purchaseOrder: new FormControl(null, [Validators.required])
    }),
    itemsInvoice: new FormArray([]),
    formDetailsPayment: new FormGroup({
      notes: new FormControl(null, []),
      terms: new FormControl(null, []),
      subtotal: new FormControl({ value: '', disabled: true }, []),
      discount: new FormControl(0, [Validators.min(0)]),
      total: new FormControl({ value: '', disabled: true }, []),
      amountPaid: new FormControl(null, [Validators.required]),
      balanceDue: new FormControl({ value: '', disabled: true }, [])
    })
  });

  constructor() { }

  ngOnInit(): void {

  }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-25
    * Metodo que retorna los form group del formulario invoice.
    * @param nameForm Nombre del form group
    * @returns form header 
  */
  getFormGroupByFormInvoice(nameForm: string): FormGroup {
    return this.formInvoice.get(nameForm) as FormGroup;
  }
}