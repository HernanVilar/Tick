import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EnviarhomeGuard } from './guards/enviarhome.guard';
import { EnviarlogearGuard } from './guards/enviarlogear.guard';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {path:'',component:InicioComponent,canActivate:[EnviarhomeGuard]},
  {path:'ingreso', loadChildren: () => import("./ingreso/ingreso.module").then(m=>m.IngresoModule)},
  {path:'home', loadChildren: () => import("./home/home.module").then(m=>m.HomeModule),canActivate:[EnviarlogearGuard]},
  {path:'altaTicket', loadChildren: () => import("./altas/altas.module").then(m=>m.AltasModule),canActivate:[EnviarlogearGuard]},
  // {path:'prue',component:PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
