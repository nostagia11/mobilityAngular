import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEcoleComponent } from './update-ecole.component';

describe('UpdateEcoleComponent', () => {
  let component: UpdateEcoleComponent;
  let fixture: ComponentFixture<UpdateEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEcoleComponent]
    });
    fixture = TestBed.createComponent(UpdateEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
