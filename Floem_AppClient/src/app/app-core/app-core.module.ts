import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [FooterComponent, HeaderComponent, FormComponent],
  exports: [FooterComponent, HeaderComponent, FormComponent],
  providers: [],
})
export class AppCoreModule {}
