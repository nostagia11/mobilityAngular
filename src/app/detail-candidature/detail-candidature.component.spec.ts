import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCandidatureComponent } from './detail-candidature.component';

describe('DetailCandidatureComponent', () => {
  let component: DetailCandidatureComponent;
  let fixture: ComponentFixture<DetailCandidatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCandidatureComponent]
    });
    fixture = TestBed.createComponent(DetailCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
