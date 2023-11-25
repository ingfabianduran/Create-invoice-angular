import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoincePageMainComponent } from './invoince-page-main.component';

describe('InvoincePageMainComponent', () => {
  let component: InvoincePageMainComponent;
  let fixture: ComponentFixture<InvoincePageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoincePageMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoincePageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
