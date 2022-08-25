import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { CrearComponent } from './contactos/crear/crear.component';
import { EditarComponent } from './contactos/editar/editar.component';

const routes: Routes = [
  { "path": "Contactos", "component": ContactosComponent},
  { "path": "Crear", "component": CrearComponent },
  { "path": "Editar/:id", "component": EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
