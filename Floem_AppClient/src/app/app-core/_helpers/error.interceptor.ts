import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ErrorService } from '../_services/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private error: ErrorService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.handleResponseError(err, request, next);
        return throwError(err);
      })
    );
  }

  private handleResponseError(
    error: HttpErrorResponse,
    request: HttpRequest<any>,
    next: HttpHandler
  ): any {
    if (error.status == 0) {
      this.error.handleBackendError(error);
    } else if (error.status == 401 || error.status == 403) {
      this.error.handleAuthError(error);
    } else if (error.status == 429) {
      this.error.handleBotError(error);
    } else {
      this.error.handleOtherError(error);
    }
  }
}
