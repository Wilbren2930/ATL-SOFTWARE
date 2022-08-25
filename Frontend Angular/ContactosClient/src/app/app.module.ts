import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DbcontextService } from '../../src/app/servicios/dbcontext.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { GlobalService } from '../../src/app/servicios/global.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContactosComponent } from './contactos/contactos.component';
import { CrearComponent } from './contactos/crear/crear.component';
import { EditarComponent } from './contactos/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatSliderModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCardModule
  ],
  providers: [DbcontextService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
