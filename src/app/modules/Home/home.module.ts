import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './components/slides/slides.component';


@NgModule({
  declarations: [
    IndexComponent,
    SlidesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ],
  exports: [
    IndexComponent
  ]
})
export class HomePageModule { }
