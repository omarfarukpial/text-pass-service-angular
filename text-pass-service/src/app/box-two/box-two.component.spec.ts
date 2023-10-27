import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTwoComponent } from './box-two.component';

describe('BoxTwoComponent', () => {
  let component: BoxTwoComponent;
  let fixture: ComponentFixture<BoxTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxTwoComponent]
    });
    fixture = TestBed.createComponent(BoxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
