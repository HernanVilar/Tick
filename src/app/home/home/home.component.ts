import { Component } from '@angular/core';
import { AltaTicketService } from 'src/app/services/alta-ticket.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {
  descripcion:any = "";
  ene:any = 'd';
  monarca:boolean = false;
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
    console.log(this.ticketService.list2);
    
  }
  getecq(data:string)
  {
    this.monarca = false;
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
    else if(data == 'gt')
    {
      this.descripcion = 'Todos los que en cantidad de color de bandera tengan mayor a 2'
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
    else if(data == 'nor')
    {
      this.descripcion = 'Todos los que no tengan en Razon desperfecto o en necesidad Normal';
    }
    else if(data == 'not')
    {
      this.descripcion = 'Es el mismo que el eq pero negado, los que en Razon sean distinto a desperfecto';
    }
    else if(data == 'indice')
    {
      this.descripcion = 'Crea un indice y trae todos los que son de país Canada';
    }
    else if(data == 'lookup')
    {
      this.descripcion = 'Lookup, hago el join me traigo todos los paises con sus respectivos ticket. Uso project';
    }
    else if(data == 'near')
    {
      this.descripcion = 'Near'
    }
    else if(data == 'type')
    {
      this.descripcion = 'Me muestra los que en cantidad de habitantes tengan el tipo en string'
    }
    else if(data == 'all')
    {
      this.descripcion = "Me devuelve el objeto que contiene dentro del array estas dos cordenadas -34.57794937287007, -58.425823141614096"
    }
    else if(data == 'exists')
    {
      this.descripcion = "Me devuelve todos los paises que tienen como forma de gobierno monarquia y su monarca."
    }
    else if(data == 'elementmatch')
    {
      this.descripcion = "Me devuelve todos tickets que por lo menos en el array tengan estado rojo y actual en false"
    }
    else if(data == 'group')
    {
      this.descripcion = "Muestra un agrupamiento dependiendo los colores de banderas me dice cuantas son de x color y que paises."
    }
    else if(data == 'info1')
    {
      this.descripcion = "Me muestra todos los paises con sus respectivos tickets cuyos paises tengan de forma de gobierno 'monarquia'"
    }
    else if(data == 'info2')
    {
      this.descripcion = "Me muestra todos  los paises que sean del mercosur con sus respectivos ticket "
    }
    if(data == 'info3')
    {
      this.descripcion = "Me muestra todos paises con sus respectivos ticket cuyos paises tengan de forma gobierno 'monarquia', que sean de europa y que además se hable en español en dicho pais."
    }


    if(data != 'lookup' && data != 'exists' && data != 'type' && data != 'group' && data != 'info1' && data != 'info2' && data != 'info3')
    {
      console.log(data);
      
      this.ticketService.geteq(data).subscribe((e:any)=>{
        console.log(e);
        
        this.ticketService.list = e;
      })
    }
    else if(data == 'group')
    {
      
      this.ticketService.geteq(data).subscribe((e:any)=>{

        Swal.fire({
          icon: 'error',
          title: 'Group',
          text: JSON.stringify(e),
        })
      })
    }

    else
    {
      // console.log(data);
      if(data == 'exists')
      {
        this.monarca = true;
      }
      
      this.ticketService.geteq(data).subscribe((e:any)=>{
      
        console.log(e)
        // for(let i  = 0; i<e.length;i++)
        // {
        //   e[i]._id += "------"
        // }
    
  
       // Agregar saltos de línea a cada objeto

      // Tu código original
        this.ticketService.list = null;
        this.ticketService.list2 = e;
      })
    }
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


