import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModalComponent } from '../modal-views/modal-views.component';

@Injectable()
export class ModalService {
  private modals: ModalComponent[] = [];

  constructor() {}

  //todo: unit test case if (error.error)
  public displayErrorMessage(error: HttpErrorResponse) {
    let message: string;
    message = error.error;
    this.open('info-modal', message);
  }

  public add(modal: ModalComponent): void {
    this.modals.push(modal);
  }

  public remove(id: string): void {
    this.modals = this.modals.filter((arr) => arr.id !== id);
  }

  public open(id: string, message: string): void {
    const modal = this.modals.find((arr) => arr.id == id);
    modal!.open(message);
  }

  public close(id: string): void {
    const modal = this.modals.find((arr) => arr.id == id);
    modal!.close();
  }
}
