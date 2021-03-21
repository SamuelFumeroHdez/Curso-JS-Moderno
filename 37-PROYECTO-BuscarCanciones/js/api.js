import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        console.log('Desde consultar api');
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        spinner();
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if(resultado.lyrics){
                    limpiarHTML();
                    const {lyrics} = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                }else{
                    UI.divMensajes.textContent = 'La canción no existe';
                    UI.divMensajes.classList.add('error');
                    setTimeout(()=>{
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
                
            });
    }
}

function spinner(){
    limpiarHTML();
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-cube-grid');

    divSpinner.innerHTML = `
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    `;

    resultado.appendChild(divSpinner);
}

function limpiarHTML(){
    while(UI.divResultado.firstChild){
        UI.divResultado.removeChild(UI.divResultado.firstChild);
    }
    UI.headingResultado.textContent = '';
}

export default API;