import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrtographyComponent } from './ortography.component';

describe('OrtographyComponent', () => {
  let component: OrtographyComponent;
  let fixture: ComponentFixture<OrtographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrtographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrtographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
