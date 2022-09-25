//lo viejo
/*function iniciar() {
    cajadatos = document.getElementById('cajadatos');
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', agregarobjeto, false);
    if ('webkitIndexedDB' in window) {
        window.indexedDB = window.webkitIndexedDB;
        window.IDBTransaction = window.webkitIDBTransaction;
        window.IDBKeyRange = window.webkitIDBKeyRange;
        window.IDBCursor = window.webkitIDBCursor;
    } else if ('mozIndexedDB' in window) {
        window.indexedDB = window.mozIndexedDB;
    }
    var solicitud = indexedDB.open('mibase');
    solicitud.addEventListener('error', errores, false);
    solicitud.addEventListener('success', crear, false);
}*/
//lo nuevo
var cajadatos, bd;
function iniciar() {
    cajadatos = document.getElementById("cajadatos");
    var boton = document.getElementById("grabar");
    boton.addEventListener("click", agregarobjeto);
    var solicitud = indexedDB.open("basededatos");
    solicitud.addEventListener("error", mostrarerror);
    solicitud.addEventListener("success", comenzar);
    solicitud.addEventListener("upgradeneeded", crearbd);
}

//lo viejo
/*function errores(e) {
    alert('Error: ' + e.code + ' ' + e.message);
}
function crear(e) {
    var bd = e.result || e.target.result;
    if (bd.version == '') {
        var solicitud = bd.setVersion('1.0');
        solicitud.addEventListener('error', errores, false);
        solicitud.addEventListener('success', crearbd, false);
    }
}*/

//lo nuevo, bastante mas corto "Comenzar" no llama a las estructuras de "error y success"
function mostrarerror(evento) {
    alert("Error: " + evento.code + " " + evento.message);
}
function comenzar(evento) {
    bd = evento.target.result;
}

//lo viejo
/*function crearbd() {
    var almacen = bd.createObjectStore('peliculas', { keyPath: 'id' });
    almacen.createIndex('BuscarFecha', 'fecha', { unique: false });
}*/

//lo nuevo, cambia que llama a "Evento" antes "e" dentro de los ()
function crearbd(evento) {
    var basededatos = evento.target.result;
    var almacen = basededatos.createObjectStore("peliculas", {
        keyPath:
            "id"
    });
    almacen.createIndex("BuscarFecha", "fecha", { unique: false });
}

//lo viejo
/*function agregarobjeto() {
    var clave = document.getElementById('clave').value;
    var titulo = document.getElementById('texto').value;
    var fecha = document.getElementById('fecha').value;
    var transaccion = bd.transaction(['peliculas'], IDBTransaction.READ_WRITE);
    var almacen = transaccion.objectStore('peliculas');
    var solicitud = almacen.add({ id: clave, nombre: titulo, fecha: fecha });
    solicitud.addEventListener('success', function () { mostrar(clave) }, false);
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
    document.getElementById('fecha').value = '';
}*/

//lo nuevo
function agregarobjeto() {
    var clave = document.getElementById("clave").value;
    var titulo = document.getElementById("texto").value;
    var fecha = document.getElementById("fecha").value;
    //aca cambia IDBTransaction.READ_WRITE
    var transaccion = bd.transaction(["peliculas"], "readwrite");
    var almacen = transaccion.objectStore("peliculas");
    //aca cambia de lugar la fila

    //aca cambia addEventListener('success', function () { mostrar(clave) }, false);
    transaccion.addEventListener("complete", function () {
        mostrar(clave);
    });
    var solicitud = almacen.add({ id: clave, nombre: titulo, fecha: fecha });
    document.getElementById("clave").value = "";
    document.getElementById("texto").value = "";
    document.getElementById("fecha").value = "";
}

//lo viejo
/*function mostrar(clave) {
    var transaccion = bd.transaction(['peliculas']);
    var almacen = transaccion.objectStore('peliculas');
    var solicitud = almacen.get(clave);
    solicitud.addEventListener('success', mostrarlista, false);
}
function mostrarlista(e) {
    var resultado = e.result || e.target.result;
    cajadatos.innerHTML = '<div>' + resultado.id + ' - ' + resultado.nombre + ' - ' + resultado.fecha + '</div>';
}*/

//lo nuevo
function mostrar(clave) {
    var transaccion = bd.transaction(["peliculas"]);
    var almacen = transaccion.objectStore("peliculas");
    var solicitud = almacen.get(clave);
    //aca cambia solamente el "false"
    solicitud.addEventListener("success", mostrarlista);
}
function mostrarlista(evento) {
    //aca cambia "var resultado = e.result || e.target.result;" en el libro anterior explicaba que varia la necesidad de uso de uno u otro
    var resultado = evento.target.result;
    cajadatos.innerHTML = "<div>" + resultado.id + " - " + resultado.nombre + " - " + resultado.fecha + "</div>";
}
//lo viejo
//window.addEventListener('load', iniciar, false);

//lo nuevo, cambia el "false"
window.addEventListener("load", iniciar);