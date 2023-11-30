import { Component, OnInit } from '@angular/core';
import { ConfigColumnsTable, Invoice } from '../../interfaces/interfaces';

@Component({
  selector: 'app-invoices-page-main',
  templateUrl: './invoices-page-main.component.html',
  styleUrls: ['./invoices-page-main.component.css']
})
export class InvoicesPageMainComponent implements OnInit {
  configColumnsTable: ConfigColumnsTable[] = [
    { name: 'Acciones', key: 'actions' },
    { name: 'Fecha', key: 'date' },
    { name: 'Cliente', key: 'nameInvoiceFrom' },
    { name: 'Cantidad de articulos', key: 'itemsInvoice' },
    { name: 'Total', key: 'total' },
    { name: 'Saldo adeudado', key: 'balanceDue' },
  ];
  keysColumnsTable: string[] = ['actions', 'date', 'nameInvoiceFrom', 'itemsInvoice', 'total', 'balanceDue'];
  dataTable: Invoice[] = [];

  constructor() { }

  ngOnInit(): void {
  
  }
}