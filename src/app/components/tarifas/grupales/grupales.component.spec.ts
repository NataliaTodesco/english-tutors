import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupalesComponent } from './grupales.component';

describe('GrupalesComponent', () => {
  let component: GrupalesComponent;
  let fixture: ComponentFixture<GrupalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
