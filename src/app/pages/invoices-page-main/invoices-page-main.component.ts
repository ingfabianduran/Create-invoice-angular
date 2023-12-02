import { Component, OnInit } from '@angular/core';
import { ConfigColumnsTable, Invoice } from '../../interfaces/interfaces';
import { ToastrService } from 'ngx-toastr';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { StoreService } from '../../services/store.service';

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
  dataTable!: Invoice[];

  constructor(
    private toastrService: ToastrService,
    private sweetAlertService: SweetAlertService,
    private storeService: StoreService
  ) {
  }

  ngOnInit(): void {
    this.storeService.getInvoices().subscribe(res => {
      this.dataTable = res;
    });
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
        this.storeService.deleteInvoice(invoice.id);
        this.toastrService.success('Factura eliminada correctamente', `Factura ${invoice.id} eliminada`);
      }
    });
  }
}