// ======================================
// TAREAS GENERALES
// Plataforma Web Educativa
// ======================================



const contenedor =
document.getElementById("listaTareasGeneral");





if(contenedor){





const tareas =
obtenerTareas();







if(tareas.length === 0){



contenedor.innerHTML = `



<div class="empty-box">


<i class="bi bi-journal-x"></i>


<h4>

No existen tareas registradas.

</h4>


<p>

Las actividades aparecerán cuando un docente cree tareas dentro de un curso.

</p>



</div>



`;





}else{





tareas.forEach(tarea=>{





contenedor.innerHTML += `



<div class="general-task-card">





<div class="task-icon">

<i class="bi bi-pencil-square"></i>

</div>





<div>


<h4>

${tarea.titulo}

</h4>




<p>

${tarea.descripcion}

</p>




<span>

📚 ${tarea.curso}

</span>




<span>

📅 ${tarea.fecha}

</span>




</div>





<div class="status">


${tarea.estado}


</div>




</div>



`;





});



}





}