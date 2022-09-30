// var cajadatos;
// function iniciar() {
//     cajadatos = document.getElementById("cajadatos");
//     var archivos = document.getElementById("archivos");
//     archivos.addEventListener("change", procesar);
// }
// function procesar(evento) {
//     cajadatos.innerHTML = "";
//     var archivos = evento.target.files;
//     var archivo = archivos[0];
//     var lector = new FileReader();
//     lector.addEventListener("load", function (evento) {
//         mostrar(evento, archivo)
//     });
//     var blob = archivo.slice(0, 1000);
//     lector.readAsBinaryString(blob);
// }
// function mostrar(evento, archivo) {
//     var resultado = evento.target.result;
//     cajadatos.innerHTML = "Nombre: " + archivo.name + "<br>";
//     cajadatos.innerHTML += "Tipo: " + archivo.type + "<br>";
//     cajadatos.innerHTML += "Tamaño: " + archivo.size + " bytes<br>";
//     cajadatos.innerHTML += "Tamaño del Blob: " + resultado.length + "bytes < br > ";
//     cajadatos.innerHTML += "Blob: " + resultado;
// }
// window.addEventListener("load", iniciar);

var cajadatos;
function iniciar() {
    cajadatos = document.getElementById("cajadatos");
    var archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar);
}
function procesar(evento) {
    cajadatos.innerHTML = "";
    var archivos = evento.target.files;
    var archivo = archivos[0];
    var lector = new FileReader();
    lector.addEventListener("load", function (evento) {
        mostrar(evento, archivo)
    });
    lector.readAsBinaryString(archivo);
}
function mostrar(evento, archivo) {
    var url = URL.createObjectURL(archivo);
    var imagen = document.createElement("img");
    imagen.src = url;
    cajadatos.appendChild(imagen);
}
window.addEventListener("load", iniciar);