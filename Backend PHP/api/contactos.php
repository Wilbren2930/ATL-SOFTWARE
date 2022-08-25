<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json");

include_once("../clases/class-contacto.php");

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST': //Guardar
        $_POST = json_decode(file_get_contents('php://input'), true);
        if (Contacto::Validacion($_POST)) {
            $contacto = new Contacto($_POST['nombre'], $_POST['apellido'], $_POST['email'], $_POST['contacto']);
            $contacto->guardarConctacto();
        }else {
            echo "Favor enviar todos los datos correspondientes.";
        }
        break;
    case 'GET': //Leer
        if (isset($_GET['id'])) {
            echo Contacto::obtenerContacto($_GET['id']);
        }else {
            echo Contacto::obtenerContactos();
        }    
        break;
    case 'PUT':
        $_PUT = json_decode(file_get_contents('php://input'), true);
        if (Contacto::Validacion($_PUT)) {
            $contacto = new Contacto($_PUT['nombre'], $_PUT['apellido'], $_PUT['email'], $_PUT['contacto']);
            $contacto->actualizarContacto($_GET['id']);
            echo "Contacto actualizado";
        }else {
            echo "Favor enviar el id para actualizar.";
        }
       
        break;
    case 'DELETE':
        if (isset($_GET['id'])) {
            Contacto::eliminarContacto($_GET['id']);
            echo Contacto::obtenerContactos();
        }else {
            echo "Debe indicar un {id} para eliminar.";
        }
        
        break;        
    default:
       
        break;
}

?>