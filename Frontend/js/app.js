
let loadTabla = () => {
    axios.get('../Backend/index.php?controller=Universidad&action=list')
    .then((response)=>{
        let datos = response.data;
        console.log(response);
        document.getElementById("cuerpoTablas").innerHTML = "";
        datos.universidades.forEach(element => {
            document.getElementById("cuerpoTablas").innerHTML += `
            <tr class="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-100">
                <th scope="row" class="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap">
                    ${element.idUni}
                </th>
                <td class="px-6 text-left py-4">
                    ${element.nombre}
                </td>
                <td class="px-6 text-left py-4">
                    ${element.direccion}
                </td>
                <td class="px-6 text-center py-4">
                    ${element.nSalones}
                </td>
                <td class="px-6 text-center py-4">
                    ${element.ciudad}
                </td>
                
                <td class="px-6 py-4 text-right">
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                        <button type="button" onclick="listar(${element.idUni})" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-blue-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-blue-700 dark:border-blue-600 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg>
                        </button>
                        <button type="button" onclick="borrarUniversidad(${element.idUni})" class="inline-flex items-center px-4 py-2 text-sm font-medium text-red-900 bg-white border border-red-200 rounded-r-md hover:bg-red-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-blue-700 dark:bg-red-700 dark:border-red-600 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                        
                        </button>
                    </div>
                    <button type="button" data-modal-target="editSalones" data-modal-show="editSalones" onclick="cargarSalones(${element.idUni})"  class=" bg-green-400 hover:bg-green-500 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                            <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                        </svg>
                    </button>
                </td>
            </tr>
            `;
        });
    })
    .catch((error)=>{
        alert(error);
    });
}

let load = () => {
    axios.get('../Backend/app.php')
    .then((response)=>{
        let datos = response.data;
        datos.generos.forEach(element => {
            document.getElementById("genero").innerHTML += `<option value=${element.idGenero}>${element.genero}</option>`;
        });
        datos.programas.forEach(element => {
            document.getElementById("programa").innerHTML += `<option value=${element.idPrograma}>${element.programa}</option>`;
        });
        loadTabla();
    })
    .catch((error)=>{
        alert(error);
    });
}


document.getElementById("cuerpo").addEventListener("load", loadTabla());

function enviarDatos() {
    let universidad = {
        nombre: document.getElementById('nombre').value.toUpperCase(),
        direccion: document.getElementById('direccion').value.toUpperCase(),
        nSalones: document.getElementById('nsalones').value,
        ciudad: document.getElementById('ciudad').value.toUpperCase(),
    };

    axios.post('../Backend/index.php?controller=Universidad&action=insert', universidad)
    .then(function (response) {
        console.log(response.data);
        if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
        else if(response.data.mensaje=="existe") swal("La universidad ya está registrada.", "", "error");
        else if(response.data.mensaje=="registro"){
            swal("Guardado", "La universidad se registró.", "success");
            llenarCampos("","", 0,"");
            loadTabla();
        }
    })
    .catch(function (error) {
        alert(error);
    });
}

btn = document.getElementById('btn-enviar');
btn.addEventListener("click", enviarDatos);

let llenarCampos = (nom, dir, nsal, ciu) => {
    document.getElementById('nombre').value = nom;
    document.getElementById('direccion').value = dir;
    document.getElementById('nsalones').value = nsal;
    document.getElementById('ciudad').value = ciu;
};

var pos = 0;

function listar(identificacion){
    axios.get('../Backend/index.php?controller=Universidad&action=listId&id='+identificacion)
    .then((response)=>{
        if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
        else {
            pos = identificacion;
            let obj = response.data.universidad[0];
            llenarCampos(obj.nombre, obj.direccion, obj.nSalones, obj.ciudad);
            btn.hidden = true;
            btnMod.hidden = false;
        }
    })
    .catch(function (error) {
        alert(error);
    });
}

function actualizarDatos() {
    let universidad = {
        nombre: document.getElementById('nombre').value.toUpperCase(),
        direccion: document.getElementById('direccion').value.toUpperCase(),
        nSalones: document.getElementById('nsalones').value,
        ciudad: document.getElementById('ciudad').value.toUpperCase(),
    };

    axios.put('../Backend/index.php?controller=Universidad&action=update&id='+pos, universidad)
    .then(function (response) {
        console.log(response);
        if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
        else if(response.data.mensaje=="existe") swal("La universidad ya está registrada.", "", "error");
        else if(response.data.mensaje=="registro"){
            llenarCampos("","", 0,"");
            loadTabla();
            btn.hidden = false;
            btnMod.hidden = true;
            swal("Actualizado!", "La información se actualizó correctamente", "success");
        } 
    })
    .catch(function (error) {
        alert(error);
    });
}

btnMod = document.getElementById('btn-modificar');
btnMod.addEventListener("click", actualizarDatos);

function borrarUniversidad(identificacion){
    swal({
        title: "¿Seguro de borrar la información?",
        text: "Una vez borrado, no se puede recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete('../Backend/index.php?controller=Universidad&action=delete&id='+identificacion)
            .then((response)=>{
                console.log(response.data);
                loadTabla();
                if(response.data.error!=undefined) swal("Código del error: "+response.data.error.codigo, response.data.error.mensaje, "error");
                else swal("Eliminado correctamente!", { icon: "success", });
            })
            .catch(error => {
                alert(error);
            });
          
        }
      });
    
}