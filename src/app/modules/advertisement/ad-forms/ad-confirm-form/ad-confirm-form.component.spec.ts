import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdConfirmFormComponent } from './ad-confirm-form.component';

describe('AdConfirmFormComponent', () => {
  let component: AdConfirmFormComponent;
  let fixture: ComponentFixture<AdConfirmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdConfirmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdConfirmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
