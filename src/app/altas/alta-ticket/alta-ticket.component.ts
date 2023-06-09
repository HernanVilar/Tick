import { Component,Inject} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavbarComponent } from '../../navbar/navbar.component'
import { IngresosService } from 'src/app/services/ingresos.service';
import { Router } from '@angular/router';
import { AltaTicketService } from 'src/app/services/alta-ticket.service';

@Component({
  selector: 'app-alta-ticket',
  templateUrl: './alta-ticket.component.html',
  styleUrls: ['./alta-ticket.component.css']
})
export class AltaTicketComponent {
  public formGroup!: FormGroup;
  nombre_ingresado:any;
  public pw:any;
  selectedOption:any
  constructor(private fb:FormBuilder,public dialogLogin: MatDialogRef<NavbarComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private ingreso:IngresosService,private router:Router,private altaTicket:AltaTicketService)
  {

  }
  onOptionChange(event: any) {
    this.selectedOption = event.value;
    // Aquí puedes realizar acciones basadas en la opción seleccionada
  }
  ngOnInit()
  {
   
  }
  aceptar()
  {
    
  }
  onNoClick(): void { this.dialogLogin.close(); }

  enviarIngreso()
  {
    var aValue:any = localStorage.getItem('auth');
    let data = JSON.parse(aValue);

    this.altaTicket.altaTicket(data.email,this.selectedOption,"Cliente").subscribe(e=>{
      console.log("Se pudo dar de alta");
      
    })

    this.dialogLogin.close()
    // Aquí puedes realizar la consulta al servidor enviando los datos correspondientes
    // ...
  }
}
