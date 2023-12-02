import { Component, OnInit } from '@angular/core';
import { ConfigColumnsTable, Invoice } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { deleteInvoice } from 'src/app/store/invoices.action';

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
  dataTable!: Observable<Invoice[]>;

  constructor(
    private store: Store<{ invoices: Invoice[] }>,
    private toastrService: ToastrService,
    private sweetAlertService: SweetAlertService
  ) {
    this.dataTable = this.store.select('invoices');
  }

  ngOnInit(): void {
    
  }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-30
    * Metodo que elimina una factura del sistema.
    * @param invoice Factura seleccionada
  */
  onClickDeleteInvoice(invoice: Invoice): void {
    this.sweetAlertService.showAlertConfirm({ title: '¿Esta seguro?', text: '¿De eliminar la factura?', icon: 'question' }).then(confirm => {
      if (confirm.isConfirmed) {
        this.store.dispatch(deleteInvoice({ id: invoice.id }));
        this.toastrService.success('Factura eliminada correctamente', `Factura ${invoice.id} eliminada`);
      }
    });
  }
}