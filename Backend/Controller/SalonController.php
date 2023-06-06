<?php


require 'Services/SalonServices.php';


class SalonController
{

    private $service;


    public function __construct()
    {
        $this->service = new SalonServices();
    }


    public function list()
    {      
        $this->service->list();
    }

    public function listId(){
        $this->service->listId();
    }

    public function selectId(){
        $this->service->selectId();
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