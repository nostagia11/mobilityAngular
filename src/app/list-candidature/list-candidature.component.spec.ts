import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCandidatureComponent } from './list-candidature.component';

describe('ListCandidatureComponent', () => {
  let component: ListCandidatureComponent;
  let fixture: ComponentFixture<ListCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCandidatureComponent]
    });
    fixture = TestBed.createComponent(ListCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
