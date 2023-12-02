import { createAction, props } from '@ngrx/store';
import { Invoice } from '../interfaces/interfaces';

export const addInvoice = createAction('addInvoice', props<{ invoice: Invoice }>());
export const deleteInvoice = createAction('deleteInvoice', props<{ id: number }>());