// ======================================
// STORAGE
// Plataforma Web Educativa
// ======================================



// ======================================
// USUARIOS
// ======================================


function obtenerUsuarios(){


    return JSON.parse(
        localStorage.getItem("usuarios")
    ) || [];


}





function guardarUsuarios(listaUsuarios){


    localStorage.setItem(
        "usuarios",
        JSON.stringify(listaUsuarios)
    );


}






function buscarUsuario(correo){


    const usuarios =
    obtenerUsuarios();



    return usuarios.find(

        usuario =>

        usuario.correo.toLowerCase()
        === correo.toLowerCase()

    );


}






// ======================================
// SESIÓN
// ======================================


function iniciarSesion(usuario){


    localStorage.setItem(

        "sesion",

        JSON.stringify(usuario)

    );


}







function obtenerSesion(){


    return JSON.parse(

        localStorage.getItem("sesion")

    );


}







function cerrarSesion(){


    localStorage.removeItem("sesion");


}






// ======================================
// CURSOS
// ======================================


function obtenerCursos(){


    return JSON.parse(

        localStorage.getItem("cursos")

    ) || [];


}







function guardarCursos(cursos){


    localStorage.setItem(

        "cursos",

        JSON.stringify(cursos)

    );


}






// ======================================
// CURSO SELECCIONADO
// ======================================



function obtenerCursoSeleccionado(){


    return JSON.parse(

        localStorage.getItem("cursoSeleccionado")

    );


}






function guardarCursoSeleccionado(curso){


    localStorage.setItem(

        "cursoSeleccionado",

        JSON.stringify(curso)

    );


}






// ======================================
// TAREAS
// ======================================



function obtenerTareas(){


    return JSON.parse(

        localStorage.getItem("tareas")

    ) || [];


}






function guardarTareas(tareas){


    localStorage.setItem(

        "tareas",

        JSON.stringify(tareas)

    );


}