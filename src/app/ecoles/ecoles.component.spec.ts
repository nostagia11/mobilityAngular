import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcolesComponent } from './ecoles.component';

describe('EcolesComponent', () => {
  let component: EcolesComponent;
  let fixture: ComponentFixture<EcolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcolesComponent]
    });
    fixture = TestBed.createComponent(EcolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
