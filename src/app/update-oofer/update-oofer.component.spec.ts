import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOoferComponent } from './update-oofer.component';

describe('UpdateOoferComponent', () => {
  let component: UpdateOoferComponent;
  let fixture: ComponentFixture<UpdateOoferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOoferComponent]
    });
    fixture = TestBed.createComponent(UpdateOoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
