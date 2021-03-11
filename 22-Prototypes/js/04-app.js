function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nomreClienteSaldo = function() {
    return `Nombre: ${this.nombre} - Saldo: ${this.saldo} - Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype); //Copiar el prototype de una función y asignarlo a otra diferente

Persona.prototype.constructor = Cliente; //Asigna el constructor de Cliente a Persona

//Instanciarlo
const juan = new Persona('Juan', 5000, 647025041);
console.log(juan.nomreClienteSaldo());
console.log(juan);