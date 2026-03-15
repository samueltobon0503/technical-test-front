import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkTasksComponent } from './work-tasks.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';

describe('WorkTasksComponent', () => {
  let component: WorkTasksComponent;
  let fixture: ComponentFixture<WorkTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 1. Importamos el componente Standalone
      imports: [WorkTasksComponent],
      // 2. Agregamos los providers necesarios para servicios y UI
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTasksComponent);
    component = fixture.componentInstance;

    // Detectamos cambios iniciales para procesar el ngOnInit (donde suelen cargarse los datos)
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
