const numeros = [1, 25, 3, 45, 5, 37, 69, 115, 32, 12];
let varNumero = 0;
let numeroMayor = 0;

numeros.forEach(numero => {
let varNumero = numero;
if (numeroMayor < varNumero) {
    numeroMayor = varNumero;
}
});

document.write(`El numero mayor es ${numeroMayor}`)