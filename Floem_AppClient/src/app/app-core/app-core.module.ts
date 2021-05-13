import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
  providers: [],
})
export class AppCoreModule {}
