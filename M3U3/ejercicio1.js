const distancia = prompt(`Ingrese una distancia mayor a 0`);


if (isNaN(distancia)) {
    document.write('Debe ingresar un número');
} else {
switch (true) {
  case distancia >= 0 && distancia < 1000:
    document.write("Ir a pie");
    break;
  case distancia >= 1000 && distancia < 10000:
    document.write("Ir en bicicleta");
    break;
  case distancia >= 10000 && distancia < 30000:
    document.write("Tomar un colectivo");
    break;
  case distancia >= 30000 && distancia < 100000:
    document.write("Ir en auto");
    break;
  case distancia >= 100000 && distancia < 1000000:
    document.write("Ir en auto");
    break;

  default:
    document.write("Tomar un avión");
    break;
}
}
