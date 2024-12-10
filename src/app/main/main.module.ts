import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {HeaderComponent} from '../pages/header/header.component';
import {FooterComponent} from '../pages/footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../interceptors/auth.interceptor';
import {ApiService} from '../services/api.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
  },ApiService]
})
export class MainModule { }
