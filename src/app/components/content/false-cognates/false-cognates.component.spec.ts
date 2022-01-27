import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalseCognatesComponent } from './false-cognates.component';

describe('FalseCognatesComponent', () => {
  let component: FalseCognatesComponent;
  let fixture: ComponentFixture<FalseCognatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalseCognatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalseCognatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
