import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USvsUKComponent } from './usvs-uk.component';

describe('USvsUKComponent', () => {
  let component: USvsUKComponent;
  let fixture: ComponentFixture<USvsUKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USvsUKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USvsUKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
