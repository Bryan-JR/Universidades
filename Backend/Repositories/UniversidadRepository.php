<?php


require 'Model/Universidad.php';


class UniversidadRepository
{

    private $universidad;


    public function __construct()
    {
        $this->universidad = new Universidad();
    }

    public function query($sql)
    {
        $result = $this->universidad->consult($sql);
        return $result;
    }

    public function getAll()
    {
        $result = $this->universidad->getAll();
        return $result;
    }

    
    public function getById($id) 
    {
        $result = $this->universidad->getById($id);
        return $result;
    }


    public function insert($data) {
        $this->universidad->insert($data);
    }


    public function setUpdate($id, $data) {
        $this->universidad->setUpdate($id, $data);
    }


    public function remove($id) {
        $this->universidad->remove($id);
    }

}

?>