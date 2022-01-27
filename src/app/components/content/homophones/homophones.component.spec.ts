import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomophonesComponent } from './homophones.component';

describe('HomophonesComponent', () => {
  let component: HomophonesComponent;
  let fixture: ComponentFixture<HomophonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomophonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomophonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
