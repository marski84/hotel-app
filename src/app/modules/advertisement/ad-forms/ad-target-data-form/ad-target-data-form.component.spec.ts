import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTargetDataFormComponent } from './ad-target-data-form.component';

describe('AdTargetDataFormComponent', () => {
  let component: AdTargetDataFormComponent;
  let fixture: ComponentFixture<AdTargetDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTargetDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTargetDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
