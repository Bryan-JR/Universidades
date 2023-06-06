<?php

include 'Model/DAO.php';

class Salon extends DAO
{


    protected $table = "Salones";


    public function getAll()
    {
        $result = $this->selectAll();
        return $result;
    }

    
    public function getById($id) 
    {
        $result = $this->selectById($id);
        return $result;
    }

    public function getId($id){
        $result = $this->selectId($id);
        return $result;
    }

    public function consult($sql)
    {
        $result = $this->query($sql);
        return $result;
    }

    public function insert($data) {
        $this->store($data);
    }


    public function setUpdate($id, $data) {
        $this->update($id, $data);
    }


    public function remove($id) {
        $this->delete($id);
    }

    

    
    
}