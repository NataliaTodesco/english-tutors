import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocationsComponent } from './colocations.component';

describe('ColocationsComponent', () => {
  let component: ColocationsComponent;
  let fixture: ComponentFixture<ColocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
