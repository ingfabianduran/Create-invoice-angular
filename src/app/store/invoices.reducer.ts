import { createReducer, on } from '@ngrx/store';
import { addInvoice, deleteInvoice } from './invoices.action';
import { Invoice } from '../interfaces/interfaces';

export const initialState: Invoice[] = [
  { actions: null, id: 1, date: new Date(), nameInvoiceFrom: 'Fabian Duran', itemsInvoice: 2, total: 1500, balanceDue: 0 }
];

export const invoicesReducer = createReducer(
  initialState,
  on(addInvoice, (state) => state),
  on(deleteInvoice, (state) => state)
);