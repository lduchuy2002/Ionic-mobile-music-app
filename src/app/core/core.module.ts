import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import httpInterceptorProvider from './interceptors/index';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    NgxsModule.forRoot([], {developmentMode: true})
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    httpInterceptorProvider
  ]
})
export class CoreModule { }
