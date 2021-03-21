//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI{
    insertarPresupuesto(cantidad){
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    insertarRestante(restante){
        const total = document.querySelector('#restante');
        total.textContent = restante;
    }
}
//Instanciar
const ui = new UI();
let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    console.log(parseFloat(presupuestoUsuario));
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload(); //Recargar la ventana actual
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
    console.log(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();
    const nombreGasto = document.querySelector('#gasto');
    const cantidadGasto = document.querySelector('#cantidad');
    if(nombreGasto.textContent === '' || cantidadGasto.textContent === ''){
        console.log('Todos los campos son ncesarios');
        return;
    }
    console.log('Validación pasada');
}