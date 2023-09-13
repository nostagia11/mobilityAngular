import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidatureComponent } from './create-candidature.component';

describe('CreateCandidatureComponent', () => {
  let component: CreateCandidatureComponent;
  let fixture: ComponentFixture<CreateCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCandidatureComponent]
    });
    fixture = TestBed.createComponent(CreateCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
