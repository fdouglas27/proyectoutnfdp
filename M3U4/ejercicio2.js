const contador = document.querySelector('textarea');
const parrafo = document.querySelector('p');
let $contador = 0;

contador.addEventListener('keyup', cuentaLetras);

function cuentaLetras(e) {
    // let $contador = 0;
    $contador++;
    console.log($contador);
    parrafo.innerText = `${$contador}`
    // console.log('contador');
}



