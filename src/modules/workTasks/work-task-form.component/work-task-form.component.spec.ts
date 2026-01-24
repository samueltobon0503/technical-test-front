import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTaskFormComponent } from './work-task-form.component';

describe('WorkTaskFormComponent', () => {
  let component: WorkTaskFormComponent;
  let fixture: ComponentFixture<WorkTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTaskFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTaskFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
