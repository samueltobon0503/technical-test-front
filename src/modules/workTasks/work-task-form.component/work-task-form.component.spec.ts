import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkTaskFormComponent } from './work-task-form.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
// IMPORTA ESTO:
import { provideNativeDateAdapter } from '@angular/material/core';

describe('WorkTaskFormComponent', () => {
  let component: WorkTaskFormComponent;
  let fixture: ComponentFixture<WorkTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTaskFormComponent],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        // AÑADE ESTO:
        provideNativeDateAdapter(),
        {
          provide: ActivatedRoute,
          useValue: {
            url: of([{ path: 'create' }]),
            snapshot: {
              queryParams: { id: '123' }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
