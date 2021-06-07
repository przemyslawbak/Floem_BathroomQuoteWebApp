import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '@services/admin.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private admin: AdminService) {}

  public ngOnInit() {
    this.createForm();
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
