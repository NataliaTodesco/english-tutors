import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenAdjetivosComponent } from './orden-adjetivos.component';

describe('OrdenAdjetivosComponent', () => {
  let component: OrdenAdjetivosComponent;
  let fixture: ComponentFixture<OrdenAdjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenAdjetivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenAdjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
