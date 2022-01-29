import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuPairComponent } from './au-pair.component';

describe('AuPairComponent', () => {
  let component: AuPairComponent;
  let fixture: ComponentFixture<AuPairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuPairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
