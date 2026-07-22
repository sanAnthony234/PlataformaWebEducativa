// ======================================
// REGISTRO DE USUARIOS
// Plataforma Web Educativa
// ======================================


const formularioRegistro = document.getElementById("formRegistro");


if (formularioRegistro) {


    formularioRegistro.addEventListener("submit", function (e) {


        e.preventDefault();


        const nombre =
        document.getElementById("nombre")
        .value
        .trim();


        const correo =
        document.getElementById("correo")
        .value
        .trim()
        .toLowerCase();


        const password =
        document.getElementById("password")
        .value
        .trim();


        const rol =
        document.getElementById("rol")
        .value
        .trim()
        .toLowerCase();



        const mensaje =
        document.getElementById("mensaje");



        if(mensaje){

            mensaje.innerHTML="";

        }



        // ==============================
        // VALIDAR CAMPOS
        // ==============================


        if(
            nombre === "" ||
            correo === "" ||
            password === "" ||
            rol === ""
        ){


            if(mensaje){

                mensaje.innerHTML=`

                <div class="alert alert-warning">

                    Complete todos los campos.

                </div>

                `;

            }


            return;

        }





        // ==============================
        // VALIDAR CORREO ESPE
        // ==============================


        if(!correo.endsWith("@espe.edu.ec")){


            if(mensaje){

                mensaje.innerHTML=`

                <div class="alert alert-danger">

                    Debe utilizar un correo institucional @espe.edu.ec

                </div>

                `;

            }


            return;

        }





        // ==============================
        // VALIDAR PASSWORD
        // ==============================


        if(password.length < 4){


            if(mensaje){

                mensaje.innerHTML=`

                <div class="alert alert-warning">

                    La contraseña debe tener mínimo 4 caracteres.

                </div>

                `;

            }


            return;

        }





        // ==============================
        // OBTENER USUARIOS
        // ==============================


        let usuarios =
        obtenerUsuarios();





        // ==============================
        // VALIDAR USUARIO EXISTENTE
        // ==============================


        const existe =
        usuarios.some(
            usuario =>
            usuario.correo === correo
        );



        if(existe){


            if(mensaje){

                mensaje.innerHTML=`

                <div class="alert alert-warning">

                    Ya existe un usuario registrado con ese correo.

                </div>

                `;

            }


            return;

        }





        // ==============================
        // CREAR USUARIO
        // ==============================


        const nuevoUsuario={


            nombre:nombre,


            correo:correo,


            password:password,


            rol:rol


        };





        usuarios.push(nuevoUsuario);



        guardarUsuarios(usuarios);





        if(mensaje){


            mensaje.innerHTML=`

            <div class="alert alert-success">

                Usuario registrado correctamente.

                <br>

                Redirigiendo al inicio de sesión...

            </div>

            `;


        }





        formularioRegistro.reset();





        setTimeout(()=>{


            window.location.href="login.html";


        },2000);





    });


}