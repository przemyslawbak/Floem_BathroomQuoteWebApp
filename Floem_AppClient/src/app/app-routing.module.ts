import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './app-core/form/form.component';
import { SaveAndBookComponent } from './app-core/save/save-and-book.component';
import { SaveAndShareComponent } from './app-core/save/save-and-share.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'save-and-share',
    component: SaveAndShareComponent,
  },
  {
    path: 'save-and-book',
    component: SaveAndBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
