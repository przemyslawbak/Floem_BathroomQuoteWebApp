import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminModel } from '@models/admin.model';
import { AdminService } from '@services/admin.service';
import { HttpService } from '@services/http.service';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public admin: AdminService,
    private http: HttpService
  ) {
    this.getAdminModel().subscribe((res) => {
      if (res) {
        this.admin.adminModel = res;
      } else {
        //??
      }
    });
  }

  public getAdminModel(): Observable<AdminModel> {
    let subject = new Subject<AdminModel>();
    this.http.getAdminModel().subscribe({
      next: (a) => {
        subject.next(a);
      },
      error: (e) => {
        subject.next(null);
      },
      complete: () => {},
    });

    return subject.asObservable();
  }

  public ngOnInit() {
    this.createForm();
  }

  public hasError(name: string) {
    const e = this.getFormControl(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }

  private getFormControl(name: string) {
    return this.form.get(name);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      MirrorInstallation: [
        this.admin.adminModel.mirrorInstallationPrice,
        [Validators.required],
      ],
    });
  }

  public onSubmit(): void {
    //todo: send post request;
    //todo: update admin service
  }
}
