import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailofferComponent } from './detailoffer.component';

describe('DetailofferComponent', () => {
  let component: DetailofferComponent;
  let fixture: ComponentFixture<DetailofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailofferComponent]
    });
    fixture = TestBed.createComponent(DetailofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
