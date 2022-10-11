// var producto = document.querySelector('.producto');
// var imgDef = document.querySelector('.imgDef');
// var titulo = document.querySelector('.titulo');
// var precio = document.querySelector('.precio');
const contGrid = document.querySelector('.contGrid');
const tablaCar = document.querySelector('.tablaCar');
const bntComprar = document.querySelector('.comprarTodo');
// producto.innerHTML += 'Hola Mundo'
// imgDef.innerHTML += "puerta 1.jpg"
// titulo.innerHTML += 'Hola Mundo'
// precio.innerHTML += 'Hola Mundo'

try {
    fetch('elementos.json')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            let contador = 0;
            console.log("🚀 ~ file: carrito.js ~ line 20 ~ contador", contador)
            
            while(datos.length > contador) {

                let producto = document.createElement('div');
                let imgCont = document.createElement('div');
                let img = document.createElement('img');
                let contenido = document.createElement('div');
                let titulo = document.createElement('h2');
                let precio = document.createElement('p');
                let addCar = document.createElement('button');

                producto.setAttribute('class', 'producto')
                imgCont.setAttribute('class', 'imgCont')
                img.setAttribute('src', datos[contador].img)
                img.setAttribute('alt', 'Puerta Placa')

                contenido.setAttribute('class', 'contenido')
                titulo.setAttribute('class', 'titulo')
                precio.setAttribute('class', 'precio')

                addCar.setAttribute('class', 'addCar')
                addCar.innerHTML = 'Añadir al carrito';
                addCar.setAttribute('value', contador)

                titulo.innerHTML = datos[contador].nombre;
                precio.innerHTML = datos[contador].precio + " $";

                producto.appendChild(imgCont);
                imgCont.appendChild(img);
                producto.appendChild(contenido);
                contenido.appendChild(titulo);
                contenido.appendChild(precio);
                contenido.appendChild(addCar);

                contGrid.appendChild(producto);

                //este bool lo uso para ver si existe o no el producto en la lista
                const bool = false;
                // imgDef.src = datos[contador].img;
                addCar.addEventListener('click', (e) => {

                    e.preventDefault()

                    // Aca se pone querySelectorAll porque audita todos los elementos para usarlos en un FOR
                    let tdGen = document.querySelectorAll('.existe');

                    const tr = document.createElement('tr');
                    const tdNombre = document.createElement('td');
                    const tdPrecio = document.createElement('td');

                    // Voy a declarar a tdNombre como una clase para despuès poder buscarla en caso que se repita
                    tdNombre.setAttribute('class', 'existe');
                    tr.setAttribute('class', 'trCargadas');

                    tdNombre.innerHTML = datos[addCar.value].nombre;
                    tdPrecio.innerHTML = datos[addCar.value].precio;

                    if (tdGen.length == 0) {
                        // alert('el largo de tdGen es: ' + tdGen.length );

                        tr.appendChild(tdNombre)
                        tr.appendChild(tdPrecio)
                        tablaCar.appendChild(tr)

                        //FOREACH, me trae el elemento y su posicion, lo voy a utilizar para encontrar si ya existe el producto en la lista
                        // tdGen.array
                    } else {
                        tdGen = document.querySelectorAll('.existe')

                        tdGen.forEach((Ele) => {
                            // console.log(Ele);
                            if (Ele.innerHTML == datos[addCar.value].nombre) {

                                // bool = true
                                tr.removeChild(tdNombre)
                                tr.removeChild(tdPrecio)
                                tablaCar.removeChild(tr)
                            }
                            else {
                            //     // alert('ENTRA EN EL ELSE??? ' + Ele.innerHTML + ' / ' + datos[addCar.value].nombre)
                                tr.appendChild(tdNombre)
                                tr.appendChild(tdPrecio)
                                tablaCar.appendChild(tr)
                            }
                        });


                    }

                    // if (bool == false) {
                    //     // alert(' if (bool == false)')
                    //     tr.appendChild(tdNombre)
                    //     tr.appendChild(tdPrecio)
                    //     tablaCar.appendChild(tr)
                    // } else {
                    //     // alert('Ya existe el producto ' + bool)
                    // }

                } //addCar.addEventListener('click', (e) =>  
                );//addCar.addEventListener;
                contador++;

            }
        })
} catch (error) {
    console.log(error);
}

bntComprar.addEventListener('click', (e) => {
    const trCargadas = document.querySelectorAll('.trCargadas');
alert('algo')
    if (trCargadas.length == 0) {
        alert('algo')

    } else {

    }
})



// "img": ".imagenes/puerta 2.jpg"