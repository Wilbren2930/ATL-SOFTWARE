<?php

include_once("../clases/class-acceso.php");

class Contacto {

    private $nombre;
    private $apellido;
    private $nombre_completo;
    private $email;
    private $contactos;

    public function __construct($_nombre, $_apellido, $_email, $_contactos = []){
        $this->nombre = $_nombre;
        $this->apellido = $_apellido;
        $this->nombre_completo = $_nombre . " " . $_apellido;
        $this->email = $_email;
        $this->contactos = $_contactos;
    }

    //CRUD
    public static function obtenerContactos(){
        return Acceso::getJson();
    }

    public function guardarConctacto(){
        $contactos = json_decode(Acceso::getJson(), true);
        $id = count($contactos);
        $contactos[] = array( 
            "id"=> $id,
            "nombre"=> $this->nombre,
            "apellido"=> $this->apellido,
            "email"=> $this->email,
            "contactos" => $this->contactos
        );

        $archivo = fopen(Acceso::setUrlFile(), "w");
        fwrite($archivo, json_encode($contactos));
        fclose($archivo);
    }

    public static function obtenerContacto($indice){   
        $contactos = json_decode(Acceso::getJson(), true);       
        if ($contactos != null) {
            for($i = 0; $i < count($contactos); $i++)
            {
                if($contactos[$i]['id'] == $indice)
                {
                    echo json_encode($contactos[$i]);
                }
            }
        }else {
            echo "No pudo ser encontrado este contacto.";
        }
    }

    public function actualizarContacto($indice){
        $contactos = json_decode(Acceso::getJson(), true);
        $contacto = array(
            "id"=> $indice,
            "nombre" => $this->nombre,
            "apellido" => $this->apellido,
            "email" => $this->email,
            "contactos" => $this->contactos
        );

        $contactos[$indice] = $contacto;
        for($i = 0; $i < count($contactos); $i++)
        {
            if($contactos[$i]['id'] == $indice)
            {
                $contactos[$i] = $contacto;
            }
        }
        $archivo = fopen(Acceso::setUrlFile(), "w");
        fwrite($archivo, json_encode($contactos));
        fclose($archivo);
    }

    public static function eliminarContacto($indice){
        $contactos = json_decode(Acceso::getJson(), true);
        $id_eliminar = 0;
        for($i = 0; $i < count($contactos); $i++)
        {
            if($contactos[$i]['id'] == $indice)
            {
                array_splice($contactos, $i, 1);
            }
        }

        $archivo = fopen(Acceso::setUrlFile(), "w");
        fwrite($archivo, json_encode($contactos));
        fclose($archivo);
    }

    public static function Validacion($datos){
        $acceso = false;
        if (isset($datos['nombre']) && isset($datos['apellido']) && isset($datos['email'])) {
            if($datos['nombre'] != "" && $datos['apellido'] != "" && $datos['email'] != ""){
                return true;
            }else {
                return false;
            }       
        }else {
            return false;
        }
    }
}



?>