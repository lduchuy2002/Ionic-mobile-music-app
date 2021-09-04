import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import httpInterceptorProvider from './interceptors/index';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    httpInterceptorProvider
  ]
})
export class CoreModule { }
