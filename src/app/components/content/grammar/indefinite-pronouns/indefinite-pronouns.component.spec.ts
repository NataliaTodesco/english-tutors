import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndefinitePronounsComponent } from './indefinite-pronouns.component';

describe('IndefinitePronounsComponent', () => {
  let component: IndefinitePronounsComponent;
  let fixture: ComponentFixture<IndefinitePronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndefinitePronounsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndefinitePronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
