import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-totals-invoince',
  templateUrl: './totals-invoince.component.html',
  styleUrls: ['./totals-invoince.component.css']
})
export class TotalsInvoinceComponent implements OnInit {
  @Input() formDetailsPayment!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
  }

  showOrHideFieldTaxOrShipping(state: boolean, name: string): void {
    if (state) this.formDetailsPayment.addControl(name, new FormControl('', [Validators.required]));
    else this.formDetailsPayment.removeControl(name);
  }
}