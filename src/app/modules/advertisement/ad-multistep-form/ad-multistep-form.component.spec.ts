import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMultistepFormComponent } from './ad-multistep-form.component';

describe('AdMultistepFormComponent', () => {
  let component: AdMultistepFormComponent;
  let fixture: ComponentFixture<AdMultistepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMultistepFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMultistepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
