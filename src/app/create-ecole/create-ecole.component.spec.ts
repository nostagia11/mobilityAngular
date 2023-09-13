import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEcoleComponent } from './create-ecole.component';

describe('CreateEcoleComponent', () => {
  let component: CreateEcoleComponent;
  let fixture: ComponentFixture<CreateEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEcoleComponent]
    });
    fixture = TestBed.createComponent(CreateEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
