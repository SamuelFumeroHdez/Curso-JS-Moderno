function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes....');
        setTimeout(()=>{
            resolve('Los clientes fueron descargados');
        },5000);
    })
}

function descargarNuevosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando predidos....');
        setTimeout(()=>{
            resolve('Los pedidos fueron descargados');
        },3000);
    })
}

const app = async () => {
    try{

    }catch(error){
        console.log(error);
    }
}

app();