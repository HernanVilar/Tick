import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IngresosService } from '../services/ingresos.service';

@Injectable({
  providedIn: 'root'
})
export class EnviarlogearGuard implements CanActivate {
  constructor(private router:Router,private ingreso:IngresosService)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("auth") != null)
      {
        this.ingreso.estadoCuenta = true;
        return true;
      }
      else
      {
        this.ingreso.estadoCuenta = false;
        this.router.navigate(['/'])
        return false;
      }
  }
  
}
