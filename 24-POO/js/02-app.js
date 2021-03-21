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

//Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;

    }
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }
}

const samuel = new Cliente('Samuel', 400);
const empresa = new Empresa('Codigo con Juan', 500, 647025041, 'Aprendizaje en líena');
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());