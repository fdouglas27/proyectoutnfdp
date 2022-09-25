function iniciar() {
    var boton = document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}

function obtener() {
    navigator.geolocation.getCurrentPosition(mostrar, errores);
}

function mostrar(posicion) {
    var ubicacion = document.getElementById('ubicacion');
    var mapurl = 'http://maps.google.com/maps/api/staticmap?center=' + posicion.coords.latitude + ',' + posicion.coords.longitude + '&zoom=12&size=400x400&sensor=false&markers=' + posicion.coords.latitude + ',' + posicion.coords.longitude + '&scale=2';
    //"http://maps.googleapis.com/maps/api/staticmap?center=${location.coords.lat},${location.coords.lng}&zoom=17&size=400x350&sensor=false&markers=${location.coords.lat},${location.coords.lng}&scale=2&key=AIzaSyDt0D6sy4v8BZFVJiAea93aiR63E-GpBL8"
    ubicacion.innerHTML = '<img src="' + mapurl + '">';
}

function errores(error) {
    alert('Error: ' + error.code + ' ' + error.message);
}
window.addEventListener('load', iniciar, false);