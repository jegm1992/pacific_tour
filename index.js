function validarContacto() {
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('mensaje');

    if (nombre == null || email == null || mensaje == null) {
        alert("Ningun campo debe quedar vacío")
    } else {
        alert("Gracias por contactarnos!")
        formulario.reset();
        return false;
    }

}

function validarReserva() {
    alert("Gracias por preferirnos!")
    formularioReserva.reset();
    return false;
}