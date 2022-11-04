var detener;
var numeroSumar = [];
suma = 0;

do {
  detener = prompt("ingrese dato: (oprima cualquier letra para salir)");

  if (!isNaN(parseInt(detener))) {
    let numero = parseInt(detener);
    numeroSumar.push(numero);
  }
} while (!isNaN(parseInt(detener)));

numeroSumar.forEach((numero) => {
//   document.write(numero);
  suma = suma + numero;
});

let varNumero = 0;
let numeroMayor = 0;

numeroSumar.forEach(numero => {
let varNumero = numero;
if (numeroMayor < varNumero) {
    numeroMayor = varNumero;
}
});

document.write(`El numero mayor es ${numeroMayor} y sumados dan un total de ${suma}.`)

