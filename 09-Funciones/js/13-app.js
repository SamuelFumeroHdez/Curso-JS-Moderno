const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproducinedo playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Levels - Avicii';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Mi Música');
reproductor.reproducirPlaylist('Mi Música');