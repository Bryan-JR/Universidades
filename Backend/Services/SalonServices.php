<?php


require 'Repositories/SalonRepository.php';


class SalonServices
{

    private $repository;


    public function __construct()
    {
        $this->repository = new SalonRepository();
    }


    public function list()
    {      
        $data = $this->repository->getAll();

        header('Content-type:application/json;charset=utf-8');
        echo json_encode([
            'salones' => $data
        ]);

    }

    public function listId(){
        try {
            $id = $_GET["id"];
            $data = $this->repository->getById($id);
            $cantidad = $this->repository->query("SELECT COUNT(*) cantidad FROM Salones WHERE idUni = ".$id)[0];
            header('Content-type:application/json;charset=utf-8');
            echo json_encode([
                'salones' => $data,
                'cantidad' => $cantidad
            ]);
        } catch (PDOException $e) {
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'error' => [
                'codigo' =>$e->getCode() ,
                'mensaje' => $e->getMessage()
            ]
            ]);
        }
    }

    public function selectId(){
        try {
            $id = $_GET["id"];
            $data = $this->repository->getId($id);
            header('Content-type:application/json;charset=utf-8');
            echo json_encode([
                'salon' => $data
            ]);
        } catch (PDOException $e) {
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'error' => [
                'codigo' =>$e->getCode() ,
                'mensaje' => $e->getMessage()
            ]
            ]);
        }
    }

    public function insert()
    {
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $this->repository->insert($data);
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'mensaje' => "registrado"
            ]);
        } catch (PDOException $e) {
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'error' => [
                'codigo' =>$e->getCode() ,
                'mensaje' => $e->getMessage()
             ]
            ]);
         }
    }
    
    public function update()
    {
        try {
            $id = $_GET["id"];
            $data = json_decode(file_get_contents("php://input"), true);
            $this->repository->setUpdate($id, $data);
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'mensaje' => "registro"
            ]);
          }  
          catch (PDOException $e) {
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'error' => [
                'codigo' =>$e->getCode() ,
                'mensaje' => $e->getMessage()
             ]
            ]);
         }
    }

    public function delete(){
        try {
            $id = $_GET["id"];
            $this->repository->remove($id);
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'mensaje' => 'Borrado'
            ]); 
        } catch (PDOException $e) {
            header('Content-type:application/json;charset=utf-8');    
            echo json_encode([
                'error' => [
                'codigo' =>$e->getCode() ,
                'mensaje' => $e->getMessage()
             ]
            ]);
         }
    }
    
}