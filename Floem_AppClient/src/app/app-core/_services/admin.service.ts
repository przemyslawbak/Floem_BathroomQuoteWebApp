import { AdminModel } from './../_models/admin.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  public adminModel: AdminModel = {} as AdminModel;
  constructor() {}
}
