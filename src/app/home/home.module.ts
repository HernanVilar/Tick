import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { homeComponent } from './home/home.component';


@NgModule({
  declarations: [
    homeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule
  ]
})
export class HomeModule { }
