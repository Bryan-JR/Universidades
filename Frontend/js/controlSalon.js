let selectMod = document.getElementById("modelo");
let selectTip = document.getElementById("tipo");
let btnSalon = document.getElementById("guardarSalon");
let btnModi = document.getElementById("modificarSalon");

function cambiarTipos(){
    tipos = {
        estandar: ["SENCILLO", "AMOBLADO"],
        auditorio: ["MEDIANO", "GRANDE"],
        videoconferencia: ["SENCILLO", "AMOBLADO", "MEDIANO"]
    }
    selectTip.innerHTML = "";
    
    if(selectMod.value=="AUDITORIO"){
        tipos.auditorio.forEach(element => {
            selectTip.innerHTML += `
            <option value="${element}"> ${element} </option>
            `;
        });
    } else if(selectMod.value=="VIDEOCONFERENCIA"){
        tipos.videoconferencia.forEach(element => {
            selectTip.innerHTML += `
            <option value="${element}"> ${element} </option>
            `;
        });
    }
    else{
        tipos.estandar.forEach(element => {
            selectTip.innerHTML += `
            <option value="${element}"> ${element} </option>
            `;
        });
    } 
};
selectMod.addEventListener('change', cambiarTipos);

// --------------------------------------

var cantidad = 0;
var posibles = 0;

let loadSalones = (id) => {
    axios.get('../Backend/index.php?controller=Salon&action=listId&id='+id)
    .then(responder => {
        let datos = responder.data;
        console.log(responder);
        if (datos.salones!=null) {
        document.getElementById("tablaSalon").innerHTML = "";
        datos.salones.forEach(element => {
            document.getElementById("tablaSalon").innerHTML += `
            <tr class="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100">
                <th scope="row" class="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                    ${element.id}
                </th>
                <td class="px-4 text-left py-2">
                    ${element.modelo}
                </td>
                <td class="px-4 text-left py-2">
                    ${element.tipo}
                </td>
                <td class="px-4 text-center py-2">
                    ${element.ubicacion}
                </td>
                <td class="px-4 text-center py-2">
                    ${element.capacidad}
                </td>
                
                <td class="px-6 py-4 text-right">
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button" onclick="listarSalon(${element.id})" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-700 dark:border-blue-600 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                        </button>
                        <button type="button" onclick="borrarSalon(${element.id})" class="inline-flex items-center px-4 py-2 text-sm font-medium text-red-900 bg-white border border-red-200 rounded-r-md hover:bg-red-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:bg-red-700 dark:border-red-600 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                        
                        </button>
                    </div>
                </td>
            </tr>
            `;
        });
        }
        cantidad = datos.cantidad.cantidad;
        document.getElementById("cantidad").innerText = cantidad;
        if(cantidad==posibles){
            btnSalon.disabled = true;
        } else {
            btnSalon.disabled = false;
        }
    })
    .catch(error =>{
        alert(error);
    });
};

let cargarSalones = (id)=>{
    localStorage.setItem("id", id);
    document.getElementById("tablaSalon").innerHTML = "";
    var obj;
    axios.get('../Backend/index.php?controller=Universidad&action=listId&id='+id)
    .then(respuesta => {
        obj = respuesta.data.universidad[0];
        document.getElementById('nomUni').innerText = obj.idUni + ". " + obj.nombre;
        posibles = obj.nSalones
        document.getElementById("posibles").innerText = posibles;
        loadSalones(id);
        document.getElementById("editSalones").classList.remove('hidden');
    })
    .catch(error =>{
        alert(error);
    });
};

function enviarSalon() {
    let salon = {
        idUni: Number(localStorage.getItem("id")),
        modelo: document.getElementById('modelo').value.toUpperCase(),
        tipo: document.getElementById('tipo').value.toUpperCase(),
        ubicacion: document.getElementById('ubicacion').value.toUpperCase(),
        capacidad: document.getElementById('capacidad').value.toUpperCase(),
    };

    axios.post('../Backend/index.php?controller=Salon&action=insert', salon)
    .then(function (response) {
        console.log(response.data);
        if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
        else if(response.data.mensaje=="registrado"){
            swal("Guardado", "La universidad se registró.", "success");
            llenarCamposSalones("","");
            loadSalones(salon.idUni);
        }
    })
    .catch(function (error) {
        alert(error);
    });
}


btnSalon.addEventListener('click', enviarSalon);

let llenarCamposSalones = (ubi, cap) => {
    document.getElementById('ubicacion').value = ubi;
    document.getElementById('capacidad').value = cap;
};

function borrarSalon(id){
    swal({
        title: "¿Seguro de borrar el salón?",
        text: "Una vez borrado, no se puede recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete('../Backend/index.php?controller=Salon&action=delete&id='+id)
            .then((response)=>{
                console.log(response.data);
                loadSalones(localStorage.getItem('id'));
                if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
                else swal("Eliminado correctamente!", { icon: "success", });
            })
            .catch(error => {
                alert(error);
            });
          
        }
      });
    
}

var posSalon = 0;
function listarSalon(id){
    axios.get('../Backend/index.php?controller=Salon&action=selectId&id='+id)
    .then((response)=>{
        if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
        else {
            posSalon = id;
            let obj = response.data.salon;
            document.getElementById('modelo').value = obj.modelo;
            cambiarTipos();
            document.getElementById('tipo').value = obj.tipo;
            document.getElementById('ubicacion').value = obj.ubicacion;
            document.getElementById('capacidad').value = obj.capacidad;
            btnSalon.hidden = true;
            btnModi.hidden = false;
        }
    })
    .catch(function (error) {
        alert(error);
    });
}

function actualizarSalon() {
    let salon = {
        modelo: document.getElementById('modelo').value.toUpperCase(),
        tipo: document.getElementById('tipo').value.toUpperCase(),
        ubicacion: document.getElementById('ubicacion').value.toUpperCase(),
        capacidad: document.getElementById('capacidad').value.toUpperCase(),
    };

    axios.put('../Backend/index.php?controller=Salon&action=update&id='+posSalon, salon)
    .then(function (response) {
        console.log(response);
        if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
        else if(response.data.mensaje=="registro"){
            llenarCamposSalones("","");
            loadSalones(localStorage.getItem('id'));
            btnSalon.hidden = false;
            btnModi.hidden = true;
            swal("Actualizado!", "La información se actualizó correctamente", "success");
        } 
    })
    .catch(function (error) {
        alert(error);
    });
}

btnModi.addEventListener('click', actualizarSalon);