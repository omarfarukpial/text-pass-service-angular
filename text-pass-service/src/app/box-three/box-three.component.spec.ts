import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxThreeComponent } from './box-three.component';

describe('BoxThreeComponent', () => {
  let component: BoxThreeComponent;
  let fixture: ComponentFixture<BoxThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxThreeComponent]
    });
    fixture = TestBed.createComponent(BoxThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
