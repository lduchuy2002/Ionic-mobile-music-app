import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostModule } from 'src/app/shared/post/post.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgxsModule } from '@ngxs/store';
import { AccountState } from './service/account.state';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    IonicModule,
    PostModule,
    NgxsModule.forFeature([AccountState])
  ],
  exports: [
    LoginPageComponent
  ]
})
export class AccountPageModule { }
