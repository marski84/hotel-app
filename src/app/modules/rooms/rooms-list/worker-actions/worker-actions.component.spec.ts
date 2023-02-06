import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerActionsComponent } from './worker-actions.component';

describe('WorkerActionsComponent', () => {
  let component: WorkerActionsComponent;
  let fixture: ComponentFixture<WorkerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
