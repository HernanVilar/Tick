import { Component } from '@angular/core';
import { AltaTicketService } from 'src/app/services/alta-ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {
  descripcion:any = "";
  ene:any = 'd';
  constructor(public ticketService:AltaTicketService)
  {
    // let data = localStorage.getItem('auth');
    this.traeApi();
  }
  traeApi()
  {
    this.ticketService.getTicket().subscribe((e:any)=>{    
      this.ticketService.list = e;
      console.log(e);
    })
  }
  getecq(data:string)
  {
    if(data == 'eq')
    { 
      this.descripcion = 'Todos los que en Razón sean desperfecto';
    }
    else if(data == 'ne')
    {
      this.descripcion = 'Todos los que en Necesidad sean distinto a Urgente'
    }
    else if(data == 'and')
    {
      this.descripcion = 'Todos los que en necesidad sean Normal y en Razon sean desperfecto'
    }
    else if(data == 'gte')
    {
      this.descripcion = 'Todos los que en cantidad de color de bandera tengan a 2'
    }
    else if(data == 'gte')
    {
      this.descripcion = 'Todos los que en cantidad de color de bandera tengan mayor o igual a 2'
    }
    else if(data == 'lte')
    {
      this.descripcion = 'Todos los que en cantidad de color de bandera tengan menores o igual a 2'
    }
    else if(data == 'lt')
    {
      this.descripcion = 'Todos los que en cantidad de color de bandera tengan menores a 2'
    }
    else if(data == 'or')
    {
      this.descripcion = 'Todos los que paises sean Dinamarca o  Razon sea desperfecto';
    }


    this.ticketService.geteq(data).subscribe((e:any)=>{
      console.log(e);
      
      this.ticketService.list = e;
    })
  }
  ngOnInit()
  {

    let data =   [
      {"unObjeto":{ "Razon":"desperfecto","Necedidad":"urgencia"},"Built":2015, "arrDate":["2023-06-05","2023-06-04"],"arraObj":[{"estado":"rojo","actual":"true","colorBandera":{"rojo":"SinResolver","amarillo":"AceptadoPendiente","verde":"resuelto"}}],"paisOrigen":{"pais":"Canada","colorbandera":["rojo","blanco"]}},
      {"unObjeto":{ "Razon":"cambioDePlan","Necedidad":"Normal"},"Built":2016, "arrDate":["2023-07-06","2023-09-06"],"arraObj":[{"estado":"rojo","actual":"true","colorBandera":{"rojo":"SinResolver","amarillo":"AceptadoPendiente","verde":"resuelto"}}],"paisOrigen":{"pais":"México","colorbandera":["rojo","blanco","verde"]}},
      {"unObjeto":{ "Razon":"darDeBaja","Necedidad":"lenta"},"Built":2017, "arrDate":["2023-11-1","2023-12-10"],"arraObj":[{"estado":"rojo","actual":"true","colorBandera":{"rojo":"SinResolver","amarillo":"AceptadoPendiente","verde":"resuelto"}}],"paisOrigen":{"pais":"Alemania","colorbandera":["negro","rojo","amarillo"]}},
      {"unObjeto":{ "Razon":"DarDeAlta","Necedidad":"urgencia"},"Built":2011, "arrDate":["2023-04-03","2023-02-01"],"arraObj":[{"estado":"rojo","actual":"true","colorBandera":{"rojo":"SinResolver","amarillo":"AceptadoPendiente","verde":"resuelto"}}],"paisOrigen":{"pais":"Estados Unidos","colorbandera":["rojo","blanco"]}},
  ]
    // let data = {email:'German@gmail.com',contrasenia:'12345'}
    // let date = JSON.stringify(data);
    // localStorage.setItem("auth",date);
  }
}
