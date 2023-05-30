import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from '../../navbar/navbar.component'
import { IngresosService } from 'src/app/services/ingresos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombre_ingresado:any;
  public pw:any;


  constructor(public dialogLogin: MatDialogRef<NavbarComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private ingreso:IngresosService,private router:Router) {
  }

  // Datos ingresados


  // Cierre del formulario
  onNoClick(): void { this.dialogLogin.close(); }

  enviarIngreso()
  {
    console.log('Usuario:', this.nombre_ingresado);
    console.log('Contraseña:', this.pw);
    this.ingreso.getApi(this.nombre_ingresado,this.pw).subscribe((e:any)=>{
      console.log(e);
      if(e.length > 0)
      {
        let data = {email:this.nombre_ingresado,contrasenia:this.pw}
        let date = JSON.stringify(data);
        localStorage.setItem("auth",date);
        this.dialogLogin.close();
        this.ingreso.estadoCuenta = true;
        this.router.navigate(["/home"]);
      }
      // si e.length > 0 lo mando al home sino le pongo un mensaje de error en las credenciales
            
    })
  
    // Aquí puedes realizar la consulta al servidor enviando los datos correspondientes
    // ...
  }
}
