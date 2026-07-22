// ======================================
// NOTIFICACIONES
// Plataforma Web Educativa
// ======================================


const usuario =
obtenerSesion();



if(!usuario){


    window.location.href="../login.html";


}





const contenedor =
document.getElementById("listaNotificaciones");




const notificaciones =
obtenerNotificaciones();






if(notificaciones.length === 0){


    contenedor.innerHTML = `


    <div class="alert alert-info">

        No existen notificaciones.

    </div>


    `;


}else{



    contenedor.innerHTML="";




    notificaciones.forEach(notificacion=>{



        contenedor.innerHTML += `


        <div class="card mb-3">


            <div class="card-body">


                <h5>

                <i class="bi bi-bell"></i>

                ${notificacion.titulo}

                </h5>



                <p>

                ${notificacion.mensaje}

                </p>



                <small class="text-muted">

                ${notificacion.fecha}

                </small>



            </div>


        </div>



        `;



    });



}