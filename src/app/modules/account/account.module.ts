import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostModule } from 'src/app/shared/post/post.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    IonicModule,
    PostModule
  ]
})
export class AccountPageModule { }
