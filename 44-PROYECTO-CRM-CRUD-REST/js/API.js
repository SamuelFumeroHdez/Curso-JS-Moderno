const url = 'http://localhost:4000/clientes';

//Crear nuevo cliente
export const nuevoCliente = async cliente =>{
    try{
        await fetch(url, {
            method: 'POST', //Método en las apis para subir informacion
            body: JSON.stringify(cliente), //Convertir de json a string
            headers: {
                'Content-Type': 'application/json' //indica al servidor que tipo de dato estoy subiendo, en este caso json
            }
        });
        window.location.href = 'index.html'; //Enviar al usuario a la página principal una vez que el usuario ha sido registrado
    }catch(error){
        console.log(error);
    }
}

//Obtener todos los clientes
export const obtenerClientes = async ()=>{
    try{
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    }catch(error){  
        console.log(error);
    }
}

//Elimina un cliente...
export const eliminarCliente = async id => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        
    }catch(error){
        console.log(error);
    }
}

//Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try{
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    }catch(error){
        console.log(error);
    }
}

//Actualiza un cliente..
export const actualizarCliente = async cliente => {
    try{
        await fetch(`${url}/${cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
}