class Cliente {

    #nombre; //Atributos privados 
    
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}

const samuel = new Cliente();
samuel.setNombre('Samuel');
console.log(samuel.getNombre());
