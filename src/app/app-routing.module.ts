import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/account/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/Home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/account/account.module').then(
        (m) => m.AccountPageModule
      ),
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
