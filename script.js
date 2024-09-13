// Script para El formulario
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

function presionarBoton() {
    let nombre = document.getElementById("validationCustom01").value;
    let apellido = document.getElementById("validationCustom02").value;
    let mensaje = document.getElementById("message").value;

    if (nombre == '' || apellido == '' || mensaje == '') {
        alert('Por favor, complete todos los campos.');
        return;
    } else {
        console.log("Mensaje enviado: " + mensaje);
        alert("Gracias por tu mensaje: " + nombre + " " + apellido + "! Te responderemos en breve. Tu mensaje aparece en la consola.");
        document.getElementById('validationCustom01').value = '';
        document.getElementById('validationCustom02').value = '';
        document.getElementById('message').value = '';
        return;
    }
}