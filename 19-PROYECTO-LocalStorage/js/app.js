// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el document está listo
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Recargando');
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();
    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion...
    if (tweet === '') {
        mostrarError('Un mesaje no puede ir vacío')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Agregar tweet al html
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
}
//Mostrar mensaje de error
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('error');
    formulario.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}

//Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //Crear el html
            const li = document.createElement('li');

            //Añadir texto
            li.innerText = tweet.texto;

            //Asignar el botón
            li.appendChild(btnEliminar);

            //Insertarlo en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega lo tweets actuales a localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

//Limpiar html
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}