const cliente = {
    nombre: 'Samuel',
    saldo: 500
}

console.log(cliente);


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const samuel = new Cliente('Samuel', 600);
console.log(samuel);