import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepFormNavigationComponent } from './multi-step-form-navigation.component';

describe('MultiStepFormNavigationComponent', () => {
  let component: MultiStepFormNavigationComponent;
  let fixture: ComponentFixture<MultiStepFormNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepFormNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepFormNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
