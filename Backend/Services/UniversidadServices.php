<?php


require 'Repositories/UniversidadRepository.php';


class UniversidadServices
{

    private $repository;


    public function __construct()
    {
        $this->repository = new UniversidadRepository();
    }


    public function list()
    {      
        $data = $this->repository->getAll();

        header('Content-type:application/json;charset=utf-8');
        echo json_encode([
            'universidades' => $data
        ]);

    }

    public function listId(){
        try {
            $id = $_GET["id"];
            $data = $this->repository->getById($id);
            header('Content-type:application/json;charset=utf-8');
            echo json_encode([
                'universidad' => $data
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
            $existe = $this->repository->query("SELECT (COUNT(*)) hay FROM Universidades WHERE nombre='".$data["nombre"]."'");
            if ($existe[0]==['hay' => 0]){
                $this->repository->insert($data);
                header('Content-type:application/json;charset=utf-8');    
                echo json_encode([
                    'mensaje' => "registro"
                ]);
            } else {
                header('Content-type:application/json;charset=utf-8');    
                echo json_encode([
                    'mensaje' => "existe"
                ]);
                
            }
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
            $nombre = $this->repository->query("SELECT nombre FROM Universidades WHERE idUni=".$id)[0];
            $existe = $this->repository->query("SELECT nombre, (COUNT(idUni)) hay FROM Universidades WHERE nombre='".$data["nombre"]."'")[0];
            if ($nombre["nombre"] == $existe['nombre']||$existe['hay']==0){
                $this->repository->setUpdate($id, $data);
                header('Content-type:application/json;charset=utf-8');    
                echo json_encode([
                    'mensaje' => "registro"
                ]);
            } else {
                header('Content-type:application/json;charset=utf-8');    
                echo json_encode([
                    'mensaje' => "existe"
                ]);
                
            }
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