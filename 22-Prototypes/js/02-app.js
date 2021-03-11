function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const samuel = new Cliente('Samuel', 600);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente
    return `El cliente ${nombre} tiene ${saldo} de saldo`;
}

console.log(formatearCliente(samuel));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en línea');

console.log(formatearCliente(CCJ));