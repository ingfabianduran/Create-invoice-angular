import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-invoince',
  templateUrl: './header-invoince.component.html',
  styleUrls: ['./header-invoince.component.css']
})
export class HeaderInvoinceComponent implements OnInit {
  @Input() formInvoiceHeader!: FormGroup;
  @ViewChild('inputFileImage') inputFileImage!: ElementRef<HTMLInputElement>;
  imageLogo: string | ArrayBuffer | null = null;

  constructor() { }

  ngOnInit(): void {
    
  }

  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que llama a la ventana para la subida de un archivo.
  */
  onClickToUploadFile(): void {
    this.inputFileImage.nativeElement.click();
  }
  /**
    * @author Fabian Duran
    * @createdate 2023-11-29
    * Metodo que setea el image logo con la imagen cargada.
    * @param $event Evento emitido por el input
  */
  onChangeUploadFile($event: Event): void {
    const fileSelect = ($event.target as HTMLInputElement).files?.[0];
    if (fileSelect) {
      const reader = new FileReader();
      reader.onload = () => this.imageLogo = reader.result;
      reader.readAsDataURL(fileSelect);
    }
  }
}