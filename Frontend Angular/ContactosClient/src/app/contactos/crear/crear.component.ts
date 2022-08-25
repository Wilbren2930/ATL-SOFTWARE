import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactos } from 'src/app/modelos/Contactos';
import { DbcontextService } from 'src/app/servicios/dbcontext.service';
import { GlobalService } from 'src/app/servicios/global.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public contactos: Contactos = new Contactos;
  private id_contacto: number = 0;
  
  constructor(private global: GlobalService, private route: ActivatedRoute, private rou: Router, private backend: DbcontextService, private formBuilder:FormBuilder) {  }
  form!: FormGroup;
  amountPattern : any = /^\d*$/;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: '',
      apellido: '',
      email: '',
      telefono1: '',
      telefono2: ''
    });
  
  }
 
  saveForm(){
    this.form.value['contacto'] = [{ 'numero': this.form.value['telefono1'] }, { 'numero': this.form.value['telefono2'] }];
    this.backend.postContactosById(this.form.value).subscribe((con: any) => {
     this.obtenerContactos();  
    }); 
  }

  obtenerContactos(){
    this.backend.getContactos().subscribe((con: Contactos[]) => {
      this.rou.navigate(['/Contactos']);
    });
  }
}
