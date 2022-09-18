/*function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    var imagen = new Image();
    imagen.src = "16293185-copo-de-nieve-de-la-luz-del-atardecer.jpg";
    imagen.addEventListener("load", modificarimagen, false);
}

function modificarimagen(e) {
    imagen = e.target;
    lienzo.drawImage(imagen, 0, 0);
    var info = lienzo.getImageData(0, 0, 175, 262);
    var pos;
    for (x = 0; x <= 175; x++) {
        for (y = 0; y <= 262; y++) {
            pos = (info.width * 4 * y) + (x * 4);
            info.data[pos] = 255 - info.data[pos];
            info.data[pos + 1] = 255 - info.data[pos + 1];
            info.data[pos + 2] = 255 - info.data[pos + 2];
        }
    }
    lienzo.putImageData(info, 0, 0);
}
window.addEventListener("load", iniciar, false);*/

function iniciar() {
    var elemento = document.getElementById('lienzo');
    lienzo = elemento.getContext('2d');
    var imagen = new Image();
    imagen.src = "brick.jpg";

    imagen.addEventListener("load", modificarimagen, false);
}

function modificarimagen(e) {
    imagen = e.target;
    //repeat, repeat-x, repeat-y y no-repeat
    var patron = lienzo.createPattern(imagen, 'repeat-y');
    lienzo.fillStyle = patron;
    lienzo.fillRect(0, 0, 500, 300);
}
window.addEventListener("load", iniciar, false);

