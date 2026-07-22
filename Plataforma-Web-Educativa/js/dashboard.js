// ======================================
// DASHBOARD
// Plataforma Web Educativa
// ======================================



const usuario = obtenerSesion();





// ======================================
// VALIDAR SESIÓN
// ======================================


if(!usuario){


    window.location.href="login.html";


}else{



    const saludo =
    document.getElementById("saludo");



    if(saludo){


        saludo.innerHTML = `

        ¡Bienvenido 
        <strong>${usuario.nombre}</strong>!

        `;


    }






    const rolUsuario =
    document.getElementById("rolUsuario");



    if(rolUsuario){


        rolUsuario.innerHTML = `

        <span class="badge bg-primary">

        ${usuario.rol}

        </span>

        `;


    }



}







// ======================================
// CERRAR SESIÓN
// ======================================



const botonCerrar =

document.getElementById("cerrarSesion");





if(botonCerrar){



    botonCerrar.addEventListener(
    "click",

    function(e){



        e.preventDefault();



        cerrarSesion();




        window.location.replace(
            "login.html"
        );



    });



}