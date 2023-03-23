import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFormContainerComponent } from './ad-form-container.component';

describe('AdFormContainerComponent', () => {
  let component: AdFormContainerComponent;
  let fixture: ComponentFixture<AdFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
