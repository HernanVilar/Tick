import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../ingreso/login/login.component';
import { RegistrarComponent } from '../ingreso/registrar/registrar.component'
import { Router } from '@angular/router';
import { IngresosService } from '../services/ingresos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog,private router:Router,public e:IngresosService) {}
  open_Ingresar_Dialog_header(): void {
    const dialogIngresarRef = this.dialog.open(LoginComponent,{
    });

      dialogIngresarRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
  open_Ingresar_Dialog_header2(): void {
    const dialogIngresarRef = this.dialog.open(RegistrarComponent,{
    });

      dialogIngresarRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
  Salir()
  {
    localStorage.removeItem('auth');
    this.router.navigate(['']);
    this.e.estadoCuenta = false;

  }
}
