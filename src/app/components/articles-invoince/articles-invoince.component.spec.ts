import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesInvoinceComponent } from './articles-invoince.component';

describe('ArticlesInvoinceComponent', () => {
  let component: ArticlesInvoinceComponent;
  let fixture: ComponentFixture<ArticlesInvoinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesInvoinceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesInvoinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
