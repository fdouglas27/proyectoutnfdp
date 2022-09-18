function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    lienzo.beginPath();
    lienzo.moveTo(100, 100);
    lienzo.lineTo(200, 200);
    lienzo.lineTo(100, 200);

    lienzo.clip();
    lienzo.beginPath();
    for (f = 0; f < 300; f = f + 10) {
        lienzo.moveTo(0, f);
        lienzo.lineTo(500, f);
    }
    lienzo.stroke()

    /*LIENZO.FILL NO NECESITA LIENZO.STROKE*/
    //lienzo.fill();
    //lienzo.closePath();
    //lienzo.stroke();
}
window.addEventListener("load", iniciar, false);
