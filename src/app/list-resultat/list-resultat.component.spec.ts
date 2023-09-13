import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultatComponent } from './list-resultat.component';

describe('ListResultatComponent', () => {
  let component: ListResultatComponent;
  let fixture: ComponentFixture<ListResultatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResultatComponent]
    });
    fixture = TestBed.createComponent(ListResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
