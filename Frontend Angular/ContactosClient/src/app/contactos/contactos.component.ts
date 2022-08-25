import { Component, OnInit } from '@angular/core';
import { Contactos } from '../modelos/Contactos';
import { DbcontextService } from '../servicios/dbcontext.service';
import { GlobalService } from '../servicios/global.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'idSend'];
  
  constructor(private backend: DbcontextService, public global: GlobalService) { }
  
  public contactos: Contactos[] = [];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.backend.getContactos().subscribe((pro: Contactos[]) => {
      this.contactos = pro;
    });
  }

  eliminarContacto(id:any){
    this.backend.deleteContactos(id).subscribe((pro: Contactos[]) => {
      this.contactos = pro;
    });
  }
}
