//Primer ejemplo circulo simple o circulo por partes
/*function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    lienzo.beginPath();
    var radianes = Math.PI / 180 * 45;
    lienzo.arc(100, 100, 50, 0, radianes, true);
    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);*/

//segundo ejemplo circulos cuadraticos
/*function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.beginPath();
    lienzo.moveTo(50, 50);
    lienzo.quadraticCurveTo(100, 125, 50, 200);

    lienzo.moveTo(50, 50);
    lienzo.quadraticCurveTo(0, 125, 0, 200);

    lienzo.moveTo(250, 50);
    lienzo.bezierCurveTo(200, 125, 300, 125, 250, 200);

    
    lienzo.moveTo(250, 50);
    lienzo.quadraticCurveTo(200, 300, 250, 200);

    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);*/

//tercer ejemplo
function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');

    lienzo.beginPath();
    lienzo.arc(200, 150, 50, 0, Math.PI * 2, false);
    lienzo.stroke();
    lienzo.lineWidth = 10;
    lienzo.lineCap = "round";
    lienzo.beginPath();
    lienzo.moveTo(230, 150);
    lienzo.arc(200, 150, 30, 0, Math.PI, false);
    lienzo.stroke();
    lienzo.lineWidth = 5;
    lienzo.lineJoin = "bevel";
    lienzo.beginPath();
    lienzo.moveTo(195, 135);
    lienzo.lineTo(215, 155);
    lienzo.lineTo(195, 155);
    lienzo.stroke();
}
window.addEventListener("load", iniciar, false);

