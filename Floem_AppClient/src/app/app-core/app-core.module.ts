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

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { HttpService } from './_services/http.service';
import { SecurityService } from './_services/security.service';
import { ModalService } from './_services/modal.service';
import { ErrorService } from './_services/error.service';

@NgModule({
  imports: [
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
  declarations: [FooterComponent, HeaderComponent, FormComponent],
  exports: [FooterComponent, HeaderComponent, FormComponent],
  providers: [HttpService, SecurityService, ModalService, ErrorService],
})
export class AppCoreModule {}
