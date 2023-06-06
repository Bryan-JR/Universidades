<?php


require 'Services/UniversidadServices.php';


class UniversidadController
{

    private $service;


    public function __construct()
    {
        $this->service = new UniversidadServices();
    }


    public function list()
    {      
        $this->service->list();
    }

    public function listId(){
        $this->service->listId();
    }

    public function insert()
    {
        $this->service->insert();
    }
    
    public function update()
    {
        $this->service->update();
    }

    public function delete(){
        $this->service->delete();
    }
    
}