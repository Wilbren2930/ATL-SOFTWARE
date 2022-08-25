import { Telefonos } from "./Telefono"

export class Contactos {
    public id: 3
    public nombre: string
    public apellido: string
    public email: string
    public contactos: Telefonos[]

    constructor(){
        this.id = 3;
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.contactos = [];
    }
}