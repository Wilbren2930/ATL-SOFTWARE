<?php
class Acceso{
    public static function getJson(){
        return file_get_contents("../data/contactos.json");
    }

    public static function setUrlFile(){
        return "../data/contactos.json";
    }
}

?>