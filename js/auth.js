// ======================================
// LOGIN DE USUARIOS
// Plataforma Web Educativa
// ======================================

const formularioLogin = document.getElementById("formLogin");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document.getElementById("correo").value.trim().toLowerCase();
        const password = document.getElementById("password").value.trim();

        const mensaje = document.getElementById("mensaje");

        if (mensaje) {
            mensaje.innerHTML = "";
        }

        // Validar campos
        if (correo === "" || password === "") {

            if (mensaje) {

                mensaje.innerHTML = `
                    <div class="alert alert-warning">
                        Complete todos los campos.
                    </div>
                `;

            }

            return;

        }

        // Buscar usuario
        const usuario = buscarUsuario(correo);

        if (!usuario) {

            if (mensaje) {

                mensaje.innerHTML = `
                    <div class="alert alert-danger">
                        El usuario no existe.
                    </div>
                `;

            }

            return;

        }

        // Validar contraseña
        if (usuario.password !== password) {

            if (mensaje) {

                mensaje.innerHTML = `
                    <div class="alert alert-danger">
                        La contraseña es incorrecta.
                    </div>
                `;

            }

            return;

        }

        // Crear sesión
        iniciarSesion(usuario);

        if (mensaje) {

            mensaje.innerHTML = `
                <div class="alert alert-success">
                    Bienvenido <strong>${usuario.nombre}</strong>.
                </div>
            `;

        }

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1200);

    });

}