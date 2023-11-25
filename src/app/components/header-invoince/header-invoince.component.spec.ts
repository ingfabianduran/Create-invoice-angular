import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInvoinceComponent } from './header-invoince.component';

describe('HeaderInvoinceComponent', () => {
  let component: HeaderInvoinceComponent;
  let fixture: ComponentFixture<HeaderInvoinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInvoinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInvoinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
