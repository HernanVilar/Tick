import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from '../../navbar/navbar.component'
import { Router } from '@angular/router';
import { IngresosService } from 'src/app/services/ingresos.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  nombre_ingresado:any;
  pw:any;
  pw2:any;
  constructor(public dialogLogin: MatDialogRef<NavbarComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private router:Router,private ingreso:IngresosService) {
  }
  onNoClick(): void { this.dialogLogin.close(); }

  enviarIngreso()
  {
    console.log('Usuario:', this.nombre_ingresado);
    console.log('Contraseña:', this.pw);
    console.log('Contraseña:', this.pw2);
    if(this.pw == this.pw2)
    {
      this.ingreso.postApi(this.nombre_ingresado,this.pw).subscribe(e=>{
        this.onNoClick();
        this.router.navigate(['/home'])
      })
    }
    else
    {
      alert("Contrasenia incorrecta!!!")
    }
    // Aquí puedes realizar la consulta al servidor enviando los datos correspondientes
    // ...
  }
}
