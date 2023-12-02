import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Invoice } from '../../interfaces/interfaces';
import { SweetAlertService } from '../../services/sweet-alert.service';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from '../../services/store.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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
  @ViewChild('containerInvoice') containerInvoice!: ElementRef<HTMLDivElement>;

  constructor(
    private sweetAlertService: SweetAlertService,
    private toastrService: ToastrService,
    private storeService: StoreService
  ) { }

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
  /**
    * @author Fabian Duran
    * @createdate 2023-11-25
    * Metodo que retorna los form group del formulario invoice.
    * @param $event Evento emitido por el componente hijo
  */
  onActionForm($event: string): void {
    if ($event === 'cancel') {
      this.formInvoice.reset();
    } else {
      if (this.formInvoice.valid) {
        this.sweetAlertService.showAlertConfirm({ title: '¿Esta seguro?', text: '¿De registrar la factura?', icon: 'question' }).then(confirm => {
          if (confirm.isConfirmed) {
            const dataForm = this.formInvoice.getRawValue();
            const newInvoice: Invoice = {
              actions: null,
              id: crypto.randomUUID(),
              date: dataForm.formHeader.date,
              nameInvoiceFrom: dataForm.formHeader.nameInvoiceFrom,
              itemsInvoice: dataForm.itemsInvoice.length,
              total: dataForm.formDetailsPayment.total,
              balanceDue: dataForm.formDetailsPayment.balanceDue
            };
            this.storeService.addInvoice(newInvoice);
            this.toastrService.success('Factura registrada correctamente');
            this.sweetAlertService.showAlertConfirm({ title: '¿Esta seguro?', text: '¿Desea imprimir la factura?', icon: 'question' }).then(confirmPdf => {
              if (confirmPdf.isConfirmed) {
                this.printPdfInvoice().then(res => {
                  this.formInvoice.reset();
                });
              } else {
                this.formInvoice.reset();
              }
            });
          }
        });
      } else {
        this.formInvoice.markAllAsTouched();
      }
    }
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-12-02
    * Metodo que imprime la factura que se registro.
  */
  async printPdfInvoice() {
    const elementToCapture = this.containerInvoice.nativeElement;
    const boundingBox = elementToCapture.getBoundingClientRect();
    const contentHeight = boundingBox.height;
    elementToCapture.style.height = contentHeight + 'px';
    await new Promise(resolve => setTimeout(resolve, 100));
    html2canvas(elementToCapture).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      heightLeft -= pageHeight;
      const doc = new jsPDF('p', 'mm', 'a4', true);
      doc.addImage(canvas, 'PNG', 0, position, imgWidth - 15, imgHeight - 15, '', 'FAST');
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
      }
      doc.save('Invoice.pdf');
    });
  }
}