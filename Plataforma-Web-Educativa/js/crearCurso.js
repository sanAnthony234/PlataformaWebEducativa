// ======================================
// CREAR CURSO
// Plataforma Web Educativa
// ======================================



const usuarioActual =
obtenerSesion();





if(!usuarioActual){


    window.location.href="../login.html";


}






if(usuarioActual.rol !== "docente"){


    window.location.href="cursos.html";


}






const formulario =
document.getElementById("formCurso");





formulario.addEventListener(
"submit",
function(e){



    e.preventDefault();






    const nombre =

    document.getElementById("nombreCurso")
    .value
    .trim();






    const descripcion =

    document.getElementById("descripcionCurso")
    .value
    .trim();







    let cursos =
    obtenerCursos();






    const nuevoCurso = {



        nombre,


        descripcion,


        docente:
        usuarioActual.nombre



    };







    cursos.push(nuevoCurso);






    guardarCursos(cursos);







    document.getElementById("mensaje").innerHTML = `



    <div class="alert alert-success">


        Curso creado correctamente.


    </div>



    `;








    formulario.reset();






    setTimeout(()=>{



        window.location.href="cursos.html";



    },1200);





});