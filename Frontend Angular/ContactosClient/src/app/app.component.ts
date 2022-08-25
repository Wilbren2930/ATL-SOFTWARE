import { Component, OnInit } from '@angular/core';
import { Contactos } from './modelos/Contactos';
import { DbcontextService } from './servicios/dbcontext.service';
import { GlobalService } from './servicios/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ContactosClient';

  visible = true;

  public contactos: Contactos[] = [];

  constructor(private backend: DbcontextService, public global: GlobalService) { }

  ngOnInit(): void {
    //this.obtenerProductos();
  }

  obtenerProductos(){
    this.backend.getContactos().subscribe((pro: Contactos[]) => {
      this.contactos = pro;
    });
  }
}
