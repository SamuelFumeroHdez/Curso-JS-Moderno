const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); //Evitar que el navegador haga lo que tiene que hacer por defecto
    console.log(e.target.method);
    console.log(e.target.action);
}