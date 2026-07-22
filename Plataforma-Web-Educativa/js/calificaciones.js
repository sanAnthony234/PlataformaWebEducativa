// ======================================
// CALIFICACIONES
// Plataforma Web Educativa
// ======================================



const usuario =
obtenerSesion();





if(!usuario){


    window.location.href="../login.html";


}






const contenedor =
document.getElementById("listaCalificaciones");






const calificaciones =
obtenerCalificaciones();






if(calificaciones.length === 0){



    contenedor.innerHTML = `


    <div class="alert alert-info">


        No existen calificaciones registradas.


    </div>



    `;



}else{



    contenedor.innerHTML="";





    let suma = 0;





    calificaciones.forEach(calificacion=>{



        suma += Number(calificacion.nota);




        contenedor.innerHTML += `



        <div class="card mb-3">


            <div class="card-body">



                <h5>

                ${calificacion.curso}

                </h5>





                <p>


                <strong>

                Actividad:

                </strong>


                ${calificacion.actividad}


                </p>






                <p>


                <strong>

                Nota:

                </strong>


                <span class="badge bg-success">

                ${calificacion.nota}

                </span>


                </p>




            </div>


        </div>



        `;



    });






    const promedio =

    (
        suma / calificaciones.length
    )
    .toFixed(2);





    contenedor.innerHTML += `



    <div class="alert alert-primary">


        Promedio general:

        <strong>

        ${promedio}

        </strong>


    </div>



    `;



}