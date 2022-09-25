/*function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
}

function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage.setItem(clave, valor);
    mostrar(clave);
}

function mostrar(clave) {
    var cajadatos = document.getElementById('cajadatos');
    var valor = sessionStorage.getItem(clave);
    cajadatos.innerHTML = '<div>' + clave + ' - ' + valor + '</div>';
}
window.addEventListener('load', iniciar, false);*/


//Segundo Ejemplo sigue sin hacer mucho
/*function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
}
function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage[clave] = valor;
    mostrar(clave);
}
function mostrar(clave) {
    var cajadatos = document.getElementById('cajadatos');
    var valor = sessionStorage[clave];
    cajadatos.innerHTML = '<div>' + clave + ' - ' + valor + '</div>';
}
window.addEventListener('load', iniciar, false);*/

//Tercer Ejemplo, ya muestra en la ventana de la dcha
/*function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}
function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage.setItem(clave, valor);
    mostrar();
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
}
function mostrar() {
    var cajadatos = document.getElementById('cajadatos');
    cajadatos.innerHTML = '';
    for (var f = 0; f < sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);
        var valor = sessionStorage.getItem(clave);
        cajadatos.innerHTML += '<div>' + clave + ' - ' + valor + '</div>';
    }
}
window.addEventListener('load', iniciar, false);*/

//Cuarto Ejemplo
function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}
function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage.setItem(clave, valor);
    mostrar();
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
}
function mostrar() {
    var cajadatos = document.getElementById('cajadatos');
    //aca genera el boton eliminar todo
    cajadatos.innerHTML = '<div><button onclick = "eliminarTodo()" > Eliminar Todo</button ></div > ';
    for (var f = 0; f < sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);
        var valor = sessionStorage.getItem(clave);
        //aca genera el boton Eliminar, revisar bien este innerHTML
        cajadatos.innerHTML += '<div>' + clave + ' - ' + valor + '<br><button onclick = "eliminar(\''+clave+'\')" > Eliminar</button ></div > ';
    }
}
function eliminar(clave) {
    if (confirm('Está Seguro?')) {
        sessionStorage.removeItem(clave);
        mostrar();
    }
}
function eliminarTodo() {
    if (confirm('Está Seguro?')) {
        sessionStorage.clear();
        mostrar();
    }
}
window.addEventListener('load', iniciar, false);