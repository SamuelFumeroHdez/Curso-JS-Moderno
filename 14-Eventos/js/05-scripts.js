window.addEventListener('scroll', () => {


    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //Nos muestra cúanto px nos queda para llegar al elemento
    if (ubicacion.top < 784) {
        console.log('El elemento está visible');
    }
});