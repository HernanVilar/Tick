import { Component } from '@angular/core';
import { AltaTicketService } from 'src/app/services/alta-ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {
  constructor(public ticketService:AltaTicketService)
  {
    // let data = localStorage.getItem('auth');
    this.traeApi();
  }
  traeApi()
  {
    this.ticketService.getTicket().subscribe((e:any)=>{    
      this.ticketService.list = e;
      
    })
  }
  ngOnInit()
  {
    // let data = {email:'German@gmail.com',contrasenia:'12345'}
    // let date = JSON.stringify(data);
    // localStorage.setItem("auth",date);
  }
}
