import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBasicDataFormComponent } from './ad-basic-data-form.component';

describe('AdBasicDataFormComponent', () => {
  let component: AdBasicDataFormComponent;
  let fixture: ComponentFixture<AdBasicDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBasicDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBasicDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
