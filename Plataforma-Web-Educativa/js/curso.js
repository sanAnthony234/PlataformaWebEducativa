// ======================================
// DETALLE DEL CURSO + TAREAS + ROLES
// Plataforma Web Educativa
// ======================================



const cursoActual =
obtenerCursoSeleccionado();



const usuarioActual =
obtenerSesion();





// ======================================
// VALIDAR CURSO
// ======================================


if(!cursoActual){


    window.location.href =
    "cursos.html";


}







// ======================================
// MOSTRAR INFORMACIÓN DEL CURSO
// ======================================


if(cursoActual){



    const nombre =
    document.getElementById("nombreCurso");



    const docente =
    document.getElementById("docenteCurso");



    const descripcion =
    document.getElementById("descripcionCurso");





    if(nombre){

        nombre.textContent =
        cursoActual.nombre;

    }





    if(docente){

        docente.textContent =
        cursoActual.docente;

    }





    if(descripcion){

        descripcion.textContent =
        cursoActual.descripcion;

    }



}








// ======================================
// CONTROL DE ROL
// ======================================



const botonNuevaTarea =
document.getElementById("btnNuevaTarea");





if(usuarioActual &&
usuarioActual.rol === "docente"){



    if(botonNuevaTarea){

        botonNuevaTarea.style.display="block";

    }



}else{



    if(botonNuevaTarea){

        botonNuevaTarea.style.display="none";

    }



}









// ======================================
// CARGAR TAREAS
// ======================================



function cargarTareas(){



const lista =
document.getElementById("listaTareas");



if(!lista){

    return;

}




const tareas =
obtenerTareas();





const tareasCurso =

tareas.filter(

tarea =>

tarea.curso === cursoActual.nombre

);






if(tareasCurso.length===0){



lista.innerHTML = `



<div class="alert alert-light">


<i class="bi bi-info-circle"></i>


No existen actividades registradas.


</div>



`;



return;


}






lista.innerHTML="";







tareasCurso.forEach(tarea=>{





lista.innerHTML += `



<div class="task-card">





<h5>

<i class="bi bi-journal-text"></i>

${tarea.titulo}

</h5>




<p>

${tarea.descripcion}

</p>





<p>


<strong>

Fecha límite:

</strong>


${tarea.fecha}


</p>






<span class="badge bg-warning">


${tarea.estado}


</span>





</div>



`;





});



}










// ======================================
// ABRIR MODAL
// ======================================



if(botonNuevaTarea){





botonNuevaTarea.addEventListener(

"click",

()=>{



const modal =

new bootstrap.Modal(

document.getElementById("modalTarea")

);



modal.show();



}



);



}









// ======================================
// GUARDAR TAREA
// ======================================



const guardar =
document.getElementById("guardarTarea");





if(guardar){





guardar.addEventListener(

"click",

()=>{





const titulo =

document
.getElementById("tituloTarea")
.value
.trim();





const descripcion =

document
.getElementById("descripcionTarea")
.value
.trim();





const fecha =

document
.getElementById("fechaTarea")
.value;







if(
titulo === "" ||
descripcion === "" ||
fecha === ""
){


alert("Complete todos los campos");


return;


}









let tareas =
obtenerTareas();







tareas.push({



curso:
cursoActual.nombre,


titulo,


descripcion,


fecha,


estado:"Pendiente"



});







guardarTareas(tareas);





location.reload();





});



}







cargarTareas();