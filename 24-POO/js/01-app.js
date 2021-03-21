class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const samuel = new Cliente('Samuel', 400);
console.log(samuel.mostrarInformacion());
console.log(samuel);

console.log(Cliente.bienvenida());

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const samuel2 = new Cliente2('Samuel', 400);
console.log(samuel2.mostrarInformacion());
console.log(samuel2);