var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];
  const parrafo = document.querySelector('p');
  const arrayAprobados = alumnos.filter( x => x.nota >= 7);
  const btn_aprobados = document.querySelector('.btn_aprobados');

  console.log(arrayAprobados);
  btn_aprobados.addEventListener("click", imprimir);

  function imprimir() {
    parrafo.innerText = "";
    arrayAprobados.forEach((aprobado) => {
        parrafo.innerText = parrafo.innerText + `Alumno aprobado:  ${aprobado.nombre} Nota ${aprobado.nota}` + "\n";
      });
  };





