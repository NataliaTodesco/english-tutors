import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerboBEComponent } from './verbo-be.component';

describe('VerboBEComponent', () => {
  let component: VerboBEComponent;
  let fixture: ComponentFixture<VerboBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerboBEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerboBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
