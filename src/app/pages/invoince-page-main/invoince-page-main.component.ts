import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-invoince-page-main',
  templateUrl: './invoince-page-main.component.html',
  styleUrls: ['./invoince-page-main.component.css']
})
export class InvoincePageMainComponent implements OnInit {
  formInvoice: FormGroup = new FormGroup({
    logo: new FormControl(null, []),
    invoiceNumber: new FormControl(null, [Validators.required]),
    nameInvoiceFrom: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    conditionsPayment: new FormControl(null, [Validators.required]),
    billTo: new FormControl(null, [Validators.required]),
    sendTo: new FormControl(null, []),
    dueDate: new FormControl(null, [Validators.required]),
    purchaseOrder: new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  
  }
}