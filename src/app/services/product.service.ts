import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Products, Product, HttpError } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlProduct: string = environment.URL_PRODUCTS;

  constructor(private httpClient: HttpClient) { }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que retorna un posible error al llamado de una peticion HTTP.
    * @param error Informacion del error
    * @returns Observable con la informacion del error
  */
  handleError(error: HttpErrorResponse): Observable<never> {
    const dataError: HttpError = { status: error.status, message: error.message };
    return throwError(() => dataError);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que retorna los productos registrados en el sistema.
    * @returns Observable con la respuesta HTTP realizada 
  */
  getProducts(): Observable<Products> {
    return this.httpClient.get<Products>(`${this.urlProduct}products`).pipe(
      catchError(error => this.handleError(error))
    );
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que retorna la informacion de un producto seleccionado.
    * @param id Id del producto seleccionado
    * @returns Observable con la respuesta HTTP realizada 
  */
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.urlProduct}products/${id}`).pipe(
      catchError(error => this.handleError(error))
    );
  }
}