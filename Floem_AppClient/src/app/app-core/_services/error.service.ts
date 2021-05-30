import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { SecurityService } from './security.service';

@Injectable()
export class ErrorService {
  constructor(
    private modalService: ModalService,
    private securityService: SecurityService
  ) {}

  public handleBackendError(error: any): void {
    error.error = 'Back-end server problems.';
    this.securityService.delayForBruteForce(10);
    this.modalService.displayErrorMessage(error);
  }

  public handleOtherError(error: HttpErrorResponse): void {
    this.modalService.displayErrorMessage(error);
  }

  public handleBotError(error: HttpErrorResponse): void {
    this.securityService.delayForBruteForce(10);
    this.modalService.displayErrorMessage(error);
  }
}
