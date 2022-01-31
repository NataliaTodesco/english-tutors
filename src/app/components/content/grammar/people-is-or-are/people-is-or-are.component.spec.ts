import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleIsOrAreComponent } from './people-is-or-are.component';

describe('PeopleIsOrAreComponent', () => {
  let component: PeopleIsOrAreComponent;
  let fixture: ComponentFixture<PeopleIsOrAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleIsOrAreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleIsOrAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
