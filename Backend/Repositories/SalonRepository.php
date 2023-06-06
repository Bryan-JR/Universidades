<?php


require 'Model/Salon.php';


class SalonRepository
{

    private $salon;


    public function __construct()
    {
        $this->salon = new Salon();
    }

    public function query($sql)
    {
        $result = $this->salon->consult($sql);
        return $result;
    }

    public function getAll()
    {
        $result = $this->salon->getAll();
        return $result;
    }

    
    public function getById($id) 
    {
        $result = $this->salon->getById($id);
        return $result;
    }

    public function getId($id){
        $result = $this->salon->getId($id);
        return $result;
    }
    public function insert($data) {
        $this->salon->insert($data);
    }


    public function setUpdate($id, $data) {
        $this->salon->setUpdate($id, $data);
    }


    public function remove($id) {
        $this->salon->remove($id);
    }

}

?>