//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muestra los autos

    //Llena las opciones de años
    llenarSelect();
});

//Event listeners para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();

});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();

});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();

});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();

});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();

});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();


});


//Funciones
function mostrarAutos(autos) {

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca}  ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Color: ${color} - Precio: $${precio}
        `;

        //Insertar en el html
        resultado.appendChild(autoHTML);
    });

}

//Genera los años del select
function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        year.appendChild(option);
    }
}

//Funcion que filtra en base a la búsqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).
    filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    limpiarResultados();

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();

    }
}

function noResultado() {
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'Ningún elemento cumple con los filtros';
    resultado.appendChild(noResultado);

}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        console.log(marca);
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {
        return auto.precio >= parseInt(minimo);
    }
    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {
        return auto.precio <= parseInt(maximo);
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if (color) {
        return auto.color === color;
    }
    return auto;
}

//Limpiar resultados
function limpiarResultados() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}