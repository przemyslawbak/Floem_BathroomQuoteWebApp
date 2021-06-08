import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminModel } from '@models/admin.model';
import { AdminService } from '@services/admin.service';
import { HttpService } from '@services/http.service';
import { ModalService } from '@services/modal.service';
import { NgxSpinnerService } from 'ngx-spinner';
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
    private http: HttpService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private modals: ModalService
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
    this.spinner.show();
    let subject = new Subject<AdminModel>();
    this.http.getAdminModel().subscribe({
      next: (a) => {
        subject.next(a);
      },
      error: (e) => {
        subject.next(null);
      },
      complete: () => {
        this.spinner.hide();
      },
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
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      RemovalsPrice: [
        this.admin.adminModel.removalsPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      FloorLvtPrice: [
        this.admin.adminModel.floorLvtPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      FloorTilingPrice: [
        this.admin.adminModel.floorTilingPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      WallTilingPrice: [
        this.admin.adminModel.wallTilingPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      WallPlasteringHalfPrice: [
        this.admin.adminModel.wallPlasteringHalfPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      WallPaintingWhitePrice: [
        this.admin.adminModel.wallPaintingWhitePrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      WallPlasteringAll: [
        this.admin.adminModel.wallPlasteringAll,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      UnitInstallation: [
        this.admin.adminModel.unitInstallation,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      DoorChangingPrice: [
        this.admin.adminModel.doorChangingPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      SpotlightPrice: [
        this.admin.adminModel.spotlightPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      SwitcherInsidePrice: [
        this.admin.adminModel.switcherInsidePrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      SwitcherOutsidePrice: [
        this.admin.adminModel.switcherOutsidePrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      SocketPrice: [
        this.admin.adminModel.socketPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      FanPrice: [
        this.admin.adminModel.fanPrice,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      CeilingPriceWhite: [
        this.admin.adminModel.ceilingPriceWhite,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      CeilingPricePlastered: [
        this.admin.adminModel.ceilingPricePlastered,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      Password: ['', [Validators.required]],
    });
  }

  public onSubmit(): void {
    this.admin.adminModel.password = this.form.value.Password;
    this.admin.adminModel.ceilingPricePlastered = this.form.value.CeilingPricePlastered;
    this.admin.adminModel.ceilingPriceWhite = this.form.value.CeilingPriceWhite;
    this.admin.adminModel.fanPrice = this.form.value.FanPrice;
    this.admin.adminModel.socketPrice = this.form.value.SocketPrice;
    this.admin.adminModel.switcherOutsidePrice = this.form.value.SwitcherOutsidePrice;
    this.admin.adminModel.switcherInsidePrice = this.form.value.SwitcherInsidePrice;
    this.admin.adminModel.spotlightPrice = this.form.value.SpotlightPrice;
    this.admin.adminModel.doorChangingPrice = this.form.value.DoorChangingPrice;
    this.admin.adminModel.unitInstallation = this.form.value.UnitInstallation;
    this.admin.adminModel.wallPlasteringAll = this.form.value.WallPlasteringAll;
    this.admin.adminModel.wallPaintingWhitePrice = this.form.value.WallPaintingWhitePrice;
    this.admin.adminModel.wallPlasteringHalfPrice = this.form.value.WallPlasteringHalfPrice;
    this.admin.adminModel.wallTilingPrice = this.form.value.WallTilingPrice;
    this.admin.adminModel.floorTilingPrice = this.form.value.FloorTilingPrice;
    this.admin.adminModel.floorLvtPrice = this.form.value.FloorLvtPrice;
    this.admin.adminModel.removalsPrice = this.form.value.RemovalsPrice;
    this.admin.adminModel.MirrorInstallation = this.form.value.MirrorInstallation;
    this.putAdminModel(this.admin.adminModel);
  }

  private putAdminModel(adminModel: AdminModel): void {
    this.spinner.show();
    this.http.updateAdmin(adminModel).subscribe(() => {
      this.spinner.hide();
      this.modals.open('info-modal', 'Updaed settings.');
      this.admin.adminModel.password = '';
      this.form.value.Password = '';
    });
  }

  public onCancel(): void {
    this.router.navigate(['']);
  }
}
