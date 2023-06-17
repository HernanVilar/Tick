import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EnviarhomeGuard } from './guards/enviarhome.guard';
import { EnviarlogearGuard } from './guards/enviarlogear.guard';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {path:'',loadChildren: () => import("./home/home.module").then(m=>m.HomeModule)},
  // {path:'prue',component:PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
