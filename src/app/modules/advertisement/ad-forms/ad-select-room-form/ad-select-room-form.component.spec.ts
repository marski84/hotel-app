import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSelectRoomFormComponent } from './ad-select-room-form.component';

describe('AdSelectRoomFormComponent', () => {
  let component: AdSelectRoomFormComponent;
  let fixture: ComponentFixture<AdSelectRoomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSelectRoomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSelectRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
