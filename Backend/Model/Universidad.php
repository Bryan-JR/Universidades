<?php

include 'Model/DAO.php';

class Universidad extends DAO
{


    protected $table = "Universidades";


    public function getAll()
    {
        $result = $this->selectAll();
        return $result;
    }

    public function consult($sql)
    {
        $result = $this->query($sql);
        return $result;
    }

    
    public function getById($id) 
    {
        $result = $this->selectById($id);
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