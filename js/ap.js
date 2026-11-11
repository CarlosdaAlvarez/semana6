// 1. Acceder a los elementos del DOM

// Saludo (lo anterior)
const nombre = document.querySelector("#nombre");
const boton = document.querySelector("#botonSaludar");
const mensaje = document.querySelector("#mensaje");

// Tarjeta (lo nuevo)
const tarjeta = document.querySelector("#tarjeta");
const botonAzul = document.querySelector("#botonAzul");
const botonVerde = document.querySelector("#botonVerde");
const botonRojo = document.querySelector("#botonRojo");
const botonRestablecer = document.querySelector("#botonRestablecer");

// 2. Crear las funciones

function saludar() {
    // Obtener el valor ingresado
    const nombreUsuario = nombre.value.trim();

    // Actualizar el contenido del DOM
    mensaje.textContent =
        "¡Hola, " + nombreUsuario +
        "! Bienvenido a mi aplicación web.";
}

function cambiarColor(color) {
    tarjeta.style.backgroundColor = color;
}

function restablecer() {
    // Al vaciar el estilo, la tarjeta vuelve al color original del CSS
    tarjeta.style.backgroundColor = "";
}

// 3. Escuchar los eventos de los botones

boton.addEventListener("click", saludar);

botonAzul.addEventListener("click", function () {
    cambiarColor("blue");
});

botonVerde.addEventListener("click", function () {
    cambiarColor("green");
});

botonRojo.addEventListener("click", function () {
    cambiarColor("red");
});

botonRestablecer.addEventListener("click", restablecer);