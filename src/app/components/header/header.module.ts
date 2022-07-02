import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercadeComponent } from '../acercade/acercade.component';



@NgModule({
  declarations: [AcercadeComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AcercadeComponent,
  ]
})
export class HeaderModule { }
