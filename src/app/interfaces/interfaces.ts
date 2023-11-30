import { SweetAlertIcon } from 'sweetalert2';

export interface HttpError {
  status: number,
  message: string
};

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface ConfigColumnsTable {
  key: string,
  name: string,
};

export interface Invoice {
  actions: null,
  id: number,
  date: Date,
  nameInvoiceFrom: string,
  itemsInvoice: number,
  total: number,
  balanceDue: number
};

export interface Alert {
  title?: string, 
  text: string, 
  icon?: SweetAlertIcon
};