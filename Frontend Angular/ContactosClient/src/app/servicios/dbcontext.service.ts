import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contactos } from '../modelos/Contactos';

@Injectable({
  providedIn: 'root'
})
export class DbcontextService {

  private Url: string = "http://localhost/ATL SOFTWARE/Backend PHP/api/contactos.php";

  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';

  getContactos() {
    return this.http.get<Contactos[]>( this.Url );
  }

  deleteContactos(id: number) {
    return this.http.delete<Contactos[]>( this.Url + "?id=" + id);
  }

  getContactosById(id: number) {
    return this.http.get<Contactos>( this.Url + "?id=" + id);
  }

  putContactosById(id: number, contactos: Contactos) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(contactos);
    return this.http.put(this.Url + "?id=" + id, body, {
      'headers': headers
    });
  }

  postContactosById(contactos: Contactos) {
    console.log("PUT");
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(contactos);
    console.log(body);
    return this.http.post(this.Url, body, {
      'headers': headers
    });
  }
}
