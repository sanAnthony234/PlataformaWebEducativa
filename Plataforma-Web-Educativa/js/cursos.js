// ======================================
// CURSOS
// Plataforma Web Educativa
// ======================================



const contenedor =
document.getElementById("listaCursos");



const usuario =
obtenerSesion();



const botonCrear =
document.getElementById("btnCrearCurso");






// ======================================
// CONTROL DE ROL
// ======================================



if(usuario && usuario.rol !== "docente"){


    if(botonCrear){

        botonCrear.style.display="none";

    }


}








let cursos =
obtenerCursos();






// ======================================
// FILTRAR CURSOS
// ======================================


if(usuario && usuario.rol==="docente"){



    cursos =
    cursos.filter(

        curso =>

        curso.creador === usuario.nombre

    );


}







// ======================================
// MOSTRAR CURSOS
// ======================================



function cargarCursos(){



if(!contenedor) return;




contenedor.innerHTML="";






if(cursos.length===0){


contenedor.innerHTML=`

<div class="alert alert-info">

No existen cursos registrados.

</div>

`;

return;


}






cursos.forEach((curso,index)=>{



contenedor.innerHTML += `



<div class="course-card">



<div class="course-icon">

<i class="bi bi-book-half"></i>

</div>





<h3>

${curso.nombre}

</h3>





<p>

${curso.descripcion}

</p>





<div class="teacher">

<i class="bi bi-person-fill"></i>

${curso.docente}

</div>





<button

class="course-btn ingresarCurso"

data-index="${index}">


Ingresar al curso

<i class="bi bi-arrow-right"></i>


</button>





</div>



`;



});




}




cargarCursos();







// ======================================
// INGRESAR AL CURSO
// ======================================



document
.querySelectorAll(".ingresarCurso")
.forEach(boton=>{


boton.addEventListener("click",()=>{



const curso =

cursos[
boton.dataset.index
];




guardarCursoSeleccionado(curso);




window.location.href =
"curso.html";



});


});








// ======================================
// CREAR CURSO DOCENTE
// ======================================



if(botonCrear){



botonCrear.addEventListener(
"click",
()=>{


const modal =

new bootstrap.Modal(

document.getElementById("modalCurso")

);



modal.show();



});


}







const guardar =

document.getElementById("guardarCurso");






if(guardar){



guardar.addEventListener(
"click",
()=>{






const nombre =

document
.getElementById("nombreCursoNuevo")
.value
.trim();






const descripcion =

document
.getElementById("descripcionCursoNuevo")
.value
.trim();






const docente =

document
.getElementById("docenteCursoNuevo")
.value
.trim();








if(
nombre === "" ||
descripcion === "" ||
docente === ""
){


alert("Complete todos los campos");


return;


}







let todosCursos =

obtenerCursos();






todosCursos.push({



nombre,


descripcion,


docente,



// Usuario que creó el curso

creador:usuario.nombre



});







guardarCursos(todosCursos);






location.reload();




});


}