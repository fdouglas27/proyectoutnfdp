function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    window.addEventListener('mousemove', animacion, false);
}
function animacion(e) {
    lienzo.clearRect(0, 0, 300, 500);
    var xraton = e.clientX;
    var yraton = e.clientY;
    var xcentro = 220;
    var ycentro = 150;
    var angulo = Math.atan2(xraton - xcentro, yraton - ycentro);
    var x = xcentro + Math.round(Math.sin(angulo) * 5);
    var y = ycentro + Math.round(Math.cos(angulo) * 5);

    //empieza un dibujo, el contorno
    lienzo.beginPath();
    //Dibujo la periferia del ojo Izq
    lienzo.arc(xcentro, ycentro, 20, 0, Math.PI * 2, false);
    //Muevo el cursor dejando de dibujas para que no quede una linea
    lienzo.moveTo(xcentro + 70, 150);
    //dibujo la perisferia del ojo dcho
    lienzo.arc(xcentro + 50, 150, 20, 0, Math.PI * 2, false);
    //Da la orden de dibujar lo indicado antes
    lienzo.stroke();
    //Empieza un nuevo dibujo, los iris
    lienzo.beginPath();
    //Mueve el cursor a el ojo izq
    lienzo.moveTo(x + 10, y);
    //Dibuja el iris izq
    lienzo.arc(x, y, 10, 0, Math.PI * 2, false);
    lienzo.moveTo(x + 60, y);
    //Dibuja el iris dcho a 50 del izq (x+50)
    lienzo.arc(x + 50, y, 10, 0, Math.PI * 2, false);
    //rellena los circulos de los iris
    lienzo.fill();
}
window.addEventListener("load", iniciar, false);