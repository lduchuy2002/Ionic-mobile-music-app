import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarsComponent } from './tab-bars/tab-bars.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    TabBarsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TabBarsComponent
  ]
})
export class LayoutModule { }
