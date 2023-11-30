import { Injectable } from '@angular/core';
import swal, { SweetAlertResult } from 'sweetalert2';
import { Alert } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-30
    * Metodo que retorna un sweetAlert.
    * @param params Propiedades de la alerta. 
  */
  showAlert(params: Alert): Promise<SweetAlertResult> {
    return swal.fire(params.title, params.text, params.icon);
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-30
    * Metodo que retorna un sweetAlert de tipo confirmacion.
    * @param params Propiedades de la alerta. 
  */
  showAlertConfirm(params: Alert): Promise<SweetAlertResult> {
    return swal.fire({
      title: params.title,
      text: params.text,
      icon: params.icon,
      showCancelButton: true,
      confirmButtonText: 'Si',
    });
  }
}