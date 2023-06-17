import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MatTableModule } from '@angular/material/table';
import { homeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    homeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatCardModule,
    FormsModule
    
  ]
})
export class HomeModule { }
