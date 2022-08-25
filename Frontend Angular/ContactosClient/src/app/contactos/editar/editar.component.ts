import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactos } from 'src/app/modelos/Contactos';
import { DbcontextService } from 'src/app/servicios/dbcontext.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public contacto: Contactos = new Contactos;
  private id_contacto : number = 0;
  constructor(private route: ActivatedRoute, private rou: Router, private backend: DbcontextService, private formBuilder:FormBuilder) {  }
  
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
   
    this.route.params.subscribe(params => {
      console.log("ID: " + params['id']);
      this.id_contacto = params['id'];
      this.buscarById(params['id']);
    });
  }
 
  saveForm(){
    this.form.value['id'] = this.id_contacto;
    this.form.value['contacto'] = [{ 'numero': this.form.value['telefono1'] }, { 'numero': this.form.value['telefono2'] }];
    this.backend.putContactosById(this.id_contacto, this.form.value).subscribe((pro: any) => {
     console.log("DONE");
     
    });
    this.rou.navigate(['/Contactos']);
  }

  buscarById(id: number){
    this.backend.getContactosById(id).subscribe((pro: any) => {
      this.contacto = pro; 
      this.form = this.formBuilder.group({
        nombre: this.contacto.nombre,
        apellido: this.contacto.apellido,
        email: this.contacto.email,
        telefono1: this.contacto.contactos.length > 0 ? this.contacto.contactos[0].numero : '',
        telefono2: this.contacto.contactos.length > 0 ? this.contacto.contactos[1].numero : ''
      });
     
    });
  }

}
