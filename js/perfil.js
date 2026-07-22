// ======================================
// PERFIL DE USUARIO
// Plataforma Web Educativa
// ======================================



const usuario =
obtenerSesion();





if(!usuario){


window.location.href =
"../login.html";


}







if(usuario){





document.getElementById("nombrePerfil").textContent =
usuario.nombre;




document.getElementById("nombreInfo").textContent =
usuario.nombre;




document.getElementById("correoInfo").textContent =
usuario.correo;




document.getElementById("rolInfo").textContent =
usuario.rol;






document.getElementById("rolPerfil").textContent =

usuario.rol === "docente"

?

"Docente"

:

"Estudiante";



}