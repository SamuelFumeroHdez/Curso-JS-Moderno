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

//Instanciarlo
const samuel = new Cliente('Samuel', 25000);
console.log(samuel.tipoCliente());
console.log(samuel.nomreClienteSaldo());
samuel.retiraSaldo(1000);
console.log(samuel.nomreClienteSaldo());
console.log(samuel);