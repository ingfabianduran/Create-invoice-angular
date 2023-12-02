import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  initialState: Invoice[] = [];
  private invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject<Invoice[]>(this.initialState);

  constructor() {
    const invoicesStorage = localStorage.getItem('invoices');
    if (invoicesStorage) {
      this.invoices.next(JSON.parse(invoicesStorage));
    }
  }

  /**
    * @author Fabian Duran
    * @createdate 2023-12-02
    * Metodo que retorna los invoices registrados en el storage.
    * @returns Observable con los invoices 
  */
  getInvoices(): Observable<Invoice[]> {
    return this.invoices.asObservable();
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-12-02
    * Metodo que setea el array de los invoices guardados en el storage.
    * @param invoices Nuevo array de invoices
  */
  setInvoices(invoices: Invoice[]): void {
    this.invoices.next([...invoices]);
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-12-02
    * Metodo que agrega un invoice al nuevo array. 
    * @param invoice Nuevo invoice
  */
  addInvoice(invoice: Invoice): void {
    const invoices = this.invoices.getValue();
    this.setInvoices([...invoices, invoice]);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-12-02
    * Metodo que elimina un invoice registrado. 
    * @param id Id del invoice
  */
  deleteInvoice(id: string): void {
    const invoices = this.invoices.getValue();
    this.setInvoices(invoices.filter(invoice => invoice.id !== id));
  }
}
