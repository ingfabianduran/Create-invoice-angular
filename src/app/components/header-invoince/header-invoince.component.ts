import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-invoince',
  templateUrl: './header-invoince.component.html',
  styleUrls: ['./header-invoince.component.css']
})
export class HeaderInvoinceComponent implements OnInit {
  @Input() formInvoice!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
  }
}