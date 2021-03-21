const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
        .then(resultado=>{
            return resultado.json();
        })
        .then(datos =>{
            mostrarHTML(datos);
        })
}

function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
       <p>Empleado: ${nombre}</p> 
       <p>ID: ${id}</p> 
       <p>Empresa: ${empresa}</p> 
       <p>Trabajo: ${trabajo}</p> 
    `;
}