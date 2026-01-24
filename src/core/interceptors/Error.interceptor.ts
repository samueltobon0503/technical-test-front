import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocurrió un error desconocido';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error de cliente: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = 'Solicitud incorrecta.';
            break;
          case 403:
            errorMessage = 'Acceso denegado. No tienes permisos.';
            break;
          case 404:
            errorMessage = 'Recurso no encontrado.';
            break;
          case 500:
            errorMessage = 'Error interno del servidor. Intenta más tarde.';
            break;
          default:
            errorMessage = `Error Código ${error.status}: ${error.error.message}`;
            break;
        }
      }

      snackBar.open(errorMessage, 'Cerrar', { duration: 5000, panelClass: ['error-snackbar'] });

      return throwError(() => error);
    })
  );
};
