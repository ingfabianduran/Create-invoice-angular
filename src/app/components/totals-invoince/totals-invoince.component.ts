import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
}