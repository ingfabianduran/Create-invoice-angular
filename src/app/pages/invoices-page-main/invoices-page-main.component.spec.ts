import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesPageMainComponent } from './invoices-page-main.component';

describe('InvoicesPageMainComponent', () => {
  let component: InvoicesPageMainComponent;
  let fixture: ComponentFixture<InvoicesPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesPageMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
