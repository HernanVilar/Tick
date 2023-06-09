import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AltaTicketService {
  public estadoCuenta:boolean = false;
  // "https://app-node-7tbh.onrender.com/api/buscar/"
  private urlPost = "http://localhost:9000/api/altaTicket";

  constructor(private http:HttpClient) { }
  altaTicket(reclamo:string,email:string,tipo:string)
  {
    const data = {email:email,reclamo:reclamo,tipoUsuario:tipo}
    return this.http.post(this.urlPost,data);
  }
}
