/*function iniciar() {
    origen1 = document.getElementById('imagen');
    origen1.addEventListener('dragstart', arrastrado, false);
    destino = document.getElementById('cajasoltar');
    destino.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    destino.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    destino.addEventListener('drop', soltado, false);
}

function arrastrado(e) {
    var codigo = '<img src="' + origen1.getAttribute('src') + '">';
    e.dataTransfer.setData('Text', codigo);
}

function soltado(e) {
    e.preventDefault();
    destino.innerHTML = e.dataTransfer.getData('Text');
}
window.addEventListener('load', iniciar, false);*/

function iniciar() {
    origen1 = document.getElementById('imagen');
    origen1.addEventListener('dragstart', arrastrado, false);
    origen1.addEventListener('dragend', finalizado, false);
    soltar = document.getElementById('cajasoltar');
    soltar.addEventListener('dragenter', entrando, false);
    soltar.addEventListener('dragleave', saliendo, false);
    soltar.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltar.addEventListener('drop', soltado, false);
}
function entrando(e) {
    e.preventDefault();
    //Cambia el color de la caja destino cuando entro pero no suelto
    soltar.style.background = 'rgba(0,255,0,.2)';
}
function saliendo(e) {
    e.preventDefault();
    //Cambia el color de la caja destino cuando tomo el archivo
    soltar.style.background = '#FFFFFF';
}
function finalizado(e) {
    elemento = e.target;
    //Oculta la imagen cuando la suelto, no importa donde
    elemento.style.visibility = 'hidden';
}

function arrastrado(e) {
    var codigo = '<img src="' + origen1.getAttribute('src') + '">';
    //Copia el archivo en la caja destino, sin esto solo se ve el nombre
    e.dataTransfer.setData('Text', codigo);
}
function soltado(e) {
    e.preventDefault();
    //cambia el color de la caja destino cuando suelto el archivo 
    soltar.style.background = 'rgb(255,0,0)';
    //Dibuja el archivo dentro de la caja
    soltar.innerHTML = e.dataTransfer.getData('Text');
}
window.addEventListener('load', iniciar, false);