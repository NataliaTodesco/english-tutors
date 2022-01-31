import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceIsOrAreComponent } from './police-is-or-are.component';

describe('PoliceIsOrAreComponent', () => {
  let component: PoliceIsOrAreComponent;
  let fixture: ComponentFixture<PoliceIsOrAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceIsOrAreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceIsOrAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
