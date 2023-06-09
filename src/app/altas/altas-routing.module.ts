import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaTicketComponent } from './alta-ticket/alta-ticket.component';

const routes: Routes = [
  {path:'',component:AltaTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltasRoutingModule { }
