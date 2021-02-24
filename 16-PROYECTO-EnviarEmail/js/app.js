//Variables
const btnEnviar = document.querySelector('#enviar');
const btnResetear = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Enviar email
    //formulario.addEventListener('submit', enviarEmail);
    btnEnviar.addEventListener('click', enviarEmail);

    //Resetear formulario
    btnResetear.addEventListener('click', resetearFormulario);
}

//Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el formulario
function validarFormulario(e) {

    //Elimina los errores
    const error = document.querySelector('p.error');
    if (error) {
        error.remove();
    }

    if (e.target.value.length > 0) {
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');

    }


    if (e.target.type === 'email') {

        if (er.test(e.target.value)) {

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');

        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            mostrarError('Email no válido');
        }
    }
    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    console.log(errores);

    if (errores.length === 0) {
        console.log('hola k ase');
        formulario.appendChild(mensajeError);
    }

    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}

function enviarEmail(e) {
    e.preventDefault();

    //Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        //Mensaje de se envió correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente';
        parrafo.classList.add('border', 'border-green-500', 'bg-green-500', 'text-white', 'p-3', 'text-center', 'mt-5', 'mb-5', 'font-bold');
        formulario.insertBefore(parrafo, spinner);
        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
        }, 3000)
    }, 3000);
}

//Funcion que resetea el formulario
function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}