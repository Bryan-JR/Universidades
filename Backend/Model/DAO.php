<?php

require_once ('Connection/DB.php');

class DAO {

    private $connection;

    public function __construct()
    {
        $this->connection = DB::getInstance();
    }

    
    public function query($sql)
    {        
        $stm = $this->connection->prepare($sql);
        $stm->execute();        
        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function selectAll()
    {
        $sql = "SELECT * FROM {$this->table}";
        $stm = $this->connection->prepare($sql);
        $stm->execute();        
        return $stm->fetchAll(PDO::FETCH_ASSOC);
    }
    

    public function selectById($id)
    {
        $sql = "SELECT * FROM {$this->table} WHERE idUni = ?";
        $stm = $this->connection->prepare($sql);
        $stm->bindParam(1, $id);
        $stm->execute();
        $res = $stm->fetchAll(PDO::FETCH_ASSOC);
        if ($res == false) {
            return null;
        }
        return $res;
    }

    public function selectId($id)
    {
        $sql = "SELECT * FROM {$this->table} WHERE id = ?";
        $stm = $this->connection->prepare($sql);
        $stm->bindParam(1, $id);
        $stm->execute();
        $res = $stm->fetch();
        if ($res == false) {
            return null;
        }
        return $res;
    }

    public function store($data){
        if($this->table=="Universidades"){
            $sql = "INSERT INTO {$this->table} (nombre, direccion, nSalones, ciudad) VALUES ('".$data["nombre"]."', '".$data["direccion"]."', ".$data["nSalones"].", '".$data["ciudad"]."')";
            $stm = $this->connection->prepare($sql);
            $stm->execute();
        } else if ($this->table=="Salones"){
            $sql = "INSERT INTO {$this->table} (idUni, modelo, ubicacion, capacidad, tipo) VALUES (".$data["idUni"].", '".$data["modelo"]."', '".$data["ubicacion"]."', ".$data["capacidad"].", '".$data["tipo"]."')";
            $stm = $this->connection->prepare($sql);
            $stm->execute();
        }
    }

    public function delete($id){
        if($this->table=="Universidades"){
            $stm = $this->connection->prepare("DELETE FROM Salones WHERE idUni = ".$id);
            $stm->execute();
            $sql = "DELETE FROM {$this->table} WHERE idUni = ".$id;
        }
        else if($this->table=="Salones") $sql = "DELETE FROM {$this->table} WHERE id = ".$id;
        $stm = $this->connection->prepare($sql);
        $stm->execute();
    }
    
    public function update($id, $data){
        if($this->table=="Universidades"){
            $sql = "UPDATE {$this->table} SET nombre = :nom, direccion = :dir, nSalones = :nsal, ciudad = :ciu WHERE idUni = :id";
            $stm = $this->connection->prepare($sql);
            // Asignamos los datos de las variables
            $nombre         = $data['nombre'];
            $direccion      = $data['direccion'];
            $nSalones       = $data['nSalones'];
            $ciudad         = $data['ciudad'];
            // Asociamos los parametros de la consulta a las variables de los datos
            $stm->bindParam(':id', $id);
            $stm->bindParam(':nom', $nombre);
            $stm->bindParam(':dir', $direccion);    
            $stm->bindParam(':nsal', $nSalones);
            $stm->bindParam(':ciu', $ciudad); 
            $stm->execute();
        } else if($this->table=="Salones"){
            $sql = "UPDATE {$this->table} SET modelo = '".$data["modelo"]."', ubicacion = '".$data["ubicacion"]."', capacidad= ".$data["capacidad"].", tipo = '".$data["tipo"]."' WHERE id = ".$id;
            $stm = $this->connection->prepare($sql);
            $stm->execute();
        }
    }
    
}