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

  onClickToUploadFile(): void {
    this.inputFileImage.nativeElement.click();
  }

  onChangeUploadFile($event: Event): void {
    const fileSelect = ($event.target as HTMLInputElement).files?.[0];
    if (fileSelect) {
      const reader = new FileReader();
      reader.onload = () => this.imageLogo = reader.result;
      reader.readAsDataURL(fileSelect);
    }
  }
}