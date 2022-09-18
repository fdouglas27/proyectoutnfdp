function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
   

/*Se puede usar una o la otra no las dos RadialGradient o LinearGradient o 2 lienzo*/
    /*var gradiente2 = lienzo.createRadialGradient(100,100,30,0,0,300);
    gradiente2.addColorStop(0.5, '#0000FF');
    gradiente2.addColorStop(1, "rgba(255,16,0,100)");
    lienzo.fillStyle = gradiente2;*/

    var gradiente = lienzo.createLinearGradient(0, 0, 10, 100);
    gradiente.addColorStop(0.5, '#0000FF');
    gradiente.addColorStop(1, "rgba(255,16,0,100)");
    lienzo.fillStyle = gradiente;

    lienzo.fillRect(10,10,100,100);
    lienzo.fillRect(150,10,200,100);
}
window.addEventListener("load", iniciar, false);