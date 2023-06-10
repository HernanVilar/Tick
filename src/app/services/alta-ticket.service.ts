import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AltaTicketService {
  public estadoCuenta:boolean = false;
  // "https://app-node-7tbh.onrender.com/api/buscar/"
  private urlPost = "http://localhost:9000/api/altaTicket";
  private urlGet = "http://localhost:9000/api/traerTickets";
  public list:any = [];
  constructor(private http:HttpClient) { }



  altaTicket(email:string,asunto:string,tipo:string,estado:string,derivadoDe:string)
  {
    console.log("asunto"+asunto,"email:"+email,"tipo"+tipo,"estado"+estado);
    
    const data = {email:email,asunto:asunto,tipoUsuario:tipo,estado:estado,derivadoDe:derivadoDe}
    return this.http.post(this.urlPost,data);
  }
  getTicket()
  {
    return this.http.get(this.urlGet);
  }
}
