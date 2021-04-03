const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda={
    moneda: '',
    criptomoneda: ''
}

//Crear un Promise
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    console.log(criptomonedas);
    resolve(criptomonedas);
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.text = `${FullName} - ${Name}`;
        option.value = Name;

        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){
    
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

function submitFormulario(e){
    e.preventDefault();

    //Validar
    const { moneda, criptomoneda } = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }else{

        //Consultar la API con los resultados
        consultarApi();

    }

}

function mostrarAlerta(msg){
    const existeError = document.querySelector('.error');

    if(!existeError){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
    
        //mensaje de error
        divMensaje.textContent = msg;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(()=>{
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarApi(){
    const { moneda, criptomoneda } = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    /*fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => {

            console.log(cotizacion);
            
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        });*/
    
    const respuesta = await fetch(url);
    const cotizacion = await respuesta.json();
    mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
}

function mostrarCotizacionHTML(cotizacion){

    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    
    precio.classList.add('precio');
    precio.innerHTML = `
        El precio es: <span>${PRICE}</span>
        El
    `;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `
        Precio más alto del día: ${HIGHDAY}
    `;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `
        Precio más bajo del día: ${LOWDAY}
    `;

    const ultimasHoras = document.createElement('p');
    
    if( parseFloat(CHANGEPCT24HOUR) < 0){
        ultimasHoras.innerHTML = `
        Variación últimas 24 horas: <span style="color:red">${CHANGEPCT24HOUR}%</span>
    `;
    }else{
        ultimasHoras.innerHTML = `
        Variación últimas 24 horas: <span style="color:green">${CHANGEPCT24HOUR}%</span>
    `;
    }

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `
        Última actualización: <span>${LASTUPDATE}</span>
    `;
    

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    
    resultado.appendChild(spinner);
}