import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsInvoinceComponent } from './totals-invoince.component';

describe('TotalsInvoinceComponent', () => {
  let component: TotalsInvoinceComponent;
  let fixture: ComponentFixture<TotalsInvoinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsInvoinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalsInvoinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
