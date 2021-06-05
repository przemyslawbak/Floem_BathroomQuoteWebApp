import { AdminService } from './_services/admin.service';
import { AdminComponent } from './admin/admin.component';
import { UnitsService } from './_services/units.service';
import { PolicyComponent } from './policy/policy.component';
import { ModalComponent } from './modal-views/modal-views.component';
import { QuoteService } from './_services/quote.service';
import { SaveAndBookComponent } from './save/save-and-book.component';
import { SaveAndShareComponent } from './save/save-and-share.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { NgToggleModule } from '@nth-cloud/ng-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { HttpService } from './_services/http.service';
import { SecurityService } from './_services/security.service';
import { ModalService } from './_services/modal.service';
import { ErrorService } from './_services/error.service';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    NgxSpinnerModule,
    MatButtonToggleModule,
    NgToggleModule,
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
  ],
  declarations: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    SaveAndShareComponent,
    SaveAndBookComponent,
    ModalComponent,
    PolicyComponent,
  ],
  exports: [
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    SaveAndBookComponent,
    SaveAndShareComponent,
    ModalComponent,
    PolicyComponent,
  ],
  providers: [
    HttpService,
    SecurityService,
    ModalService,
    ErrorService,
    QuoteService,
    UnitsService,
    AdminService,
  ],
})
export class AppCoreModule {}
