import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  public estadoCuenta:boolean = false;
  // "https://app-node-7tbh.onrender.com/api/buscar/"
  private url = "https://app-node-7tbh.onrender.com/api/buscar/";
  private urlPost = "https://app-node-7tbh.onrender.com/api/registro";
  constructor(private http:HttpClient) { }

  getApi(usuario:string,contrasenia:string){
    return this.http.get(this.url + usuario + '/' + contrasenia);
  }
  postApi(usuario:string,contrasenia:string)
  {
    const data = {email:usuario,contrasenia:contrasenia}
    return this.http.post(this.urlPost,data);
  }
}

