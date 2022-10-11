// (ctrl + k) + (crtl + c) comentar
// (ctrl + k) + (crtl + U) descomentar

//document.querySelectorAll nos va a traer todos los archivos de la clase que pongamos dentro del parentesis
//Esto lo comento dado que ahora estoy cargando todo dinamicamente con main.js y los botones dejaron de funcionar por ello
// const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
// addToShoppingCartButtons.forEach((addToCartButton) => {
//     addToCartButton.addEventListener('click', addToCartClicked);

// });

//para solucionar las lineas comentadas de arriba lo que vamos a hacer es escuchar a todo el documento en busqueda de un click
document.addEventListener('click', (event) => {
    if (event.target && event.target.className.includes('addToCart')) {
        addToCartClicked(event);
    }
});

const comprarButton = document.querySelector('.comprarButton');
//para probar un boton en la consola
// comprarButton.addEventListener('click', () => console.log('comprar'))
comprarButton.addEventListener('click', comprarButtonClicked);

//Esta variable la declaro acá porque es global
const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
    const button = event.target;

    //Dentro de la constante "item" guardo todos los datos "cercanos" a "buttons"
    const item = button.closest('.item');

    //Todos los console.log, son para ver en consola las salidas, es para debuggear
    // console.log("🚀 ~ file: tienda.js ~ line 133 ~ addToCartClicked ~ item", item)

    //capturo los datos particulares de las clases y los pongo en un contenedor
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;
    //Agrego esto para el pago minuto 1:18:34 del video
    const itemId = item.dataset.id;
    // hago un llamado a una funcion para trabajar los datos obtenidos
    addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId) {

    //Que no se dupliquen los pedidos, en caso de hacer doble click en el añadir que aparezca una sola vez pero que sume 2 
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++) {
        //solo entra en el if si ya existe en el listado, por eso salimos con el "return" para que no ejecute el codigo de abajo, solo con los repetidos
        if (elementsTitle[i].innerText === itemTitle) {

            //estoy parado en el <h6> del titulo con un parentElement subo al <div class="shopping-cart...", con el siguiente a <div class="col-6"> con el ultimo me posiciono arriba en "<div class="row shoppingCartItem"> dado que quiero llegar hasta uno de sus hijos que es "shoppingCartItemQuantity", es todo sobre el codigo que esta en verde un poco mas abajo
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantity.value++;

            //esto que sumo ahora es un "toast" de boostrap, es importante sumar la referencia en el html llamando a boostrap
            $('.toast').toast('show');
            updateShoppingCartTotal();
            return;
        }
    }

    //ahora vamos a llenar el carrito
    const shoppingCartRow = document.createElement('div');

    //con "alt + 96" pongo la comillas especiales (`) para citar un bloque de codigo "string literal"
    const shoppingCartContent = `
        <div class="row shoppingCartItem" data-id=${itemId}>
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);


    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    shoppingCartItems.forEach((shoppingCartItem) => {
        //En este caso traemos todo el elemento
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
            '.shoppingCartItemPrice'
        );
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('€', ''));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });

    shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;

    //En este caso traemos solo la parte del precio
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    // if (input.value <= 0) {
    //     input.value = 1;
    // }    
    //esta funcion hace lo mismo que el if de arriba se llaman ternarios de JS
    //basicamente dice que si el valor de input es menor o igual a cero lo haga 1 y sino nada
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}

function comprarButtonClicked() {

    // function getItemsInShoppingCart
    const shoppingCartItems = getItemsInShoppingCart();

    // function addToLocalStorage
    addToLocalStorage('shoppingCart', shoppingCartItems);
    // console.log("🚀 ~ file: tienda.js ~ line 151 ~ comprarButtonClicked ~ shoppingCartItems", shoppingCartItems)

    // este vaciado de carrito lo vamos a realizar desde otro lugar
    // shoppingCartItemsContainer.innerHTML = '';

    updateShoppingCartTotal();

}

function getItemsInShoppingCart() {
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    const arrShoppingCartItems = [];

    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value)
        const itemId = shoppingCartItem.dataset.id;

        const item = {
            id: itemId,
            qty: shoppingCartItemQuantity,
        }
        arrShoppingCartItems.push(item);

    });
    return arrShoppingCartItems;
}

function addToLocalStorage(key, items) {
    localStorage.setItem(key, JSON.stringify(items))
}


/////////////////////////////////////////////////////////////

// document.addEventListener('click', (event) => {
//     if (event.target && event.target.className.includes('addToCart')) {
//         addToCartClicked(event);
//     }
// });



// const comprarButton = document.querySelector('.comprarButton');
// comprarButton.addEventListener('click', comprarButtonClicked);

// const shoppingCartItemsContainer = document.querySelector(
//     '.shoppingCartItemsContainer'
// );

// function addToCartClicked(event) {
//     const button = event.target;
//     const item = button.closest('.item');

//     const itemTitle = item.querySelector('.item-title').textContent;
//     const itemPrice = item.querySelector('.item-price').textContent;
//     const itemImage = item.querySelector('.item-image').src;
//     const itemId = item.dataset.id;

//     addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId);
// }




// function addItemToShoppingCart(itemTitle, itemPrice, itemImage, itemId) {
//     const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
//         'shoppingCartItemTitle'
//     );
//     for (let i = 0; i < elementsTitle.length; i++) {

//         if (elementsTitle[i].innerText === itemTitle) {
//             let elementQuantity = elementsTitle[
//                 i
//             ].parentElement.parentElement.parentElement.querySelector(
//                 '.shoppingCartItemQuantity'
//             );
//             elementQuantity.value++;
//             $('.toast').toast('show');
//             updateShoppingCartTotal();
//             return;
//         }
//     }

//     const shoppingCartRow = document.createElement('div');
//     const shoppingCartContent = `
//     <div class="row shoppingCartItem" data-id=${itemId}>
//           <div class="col-6">
//               <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
//                   <img src=${itemImage} class="shopping-cart-image">
//                   <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
//               </div>
//           </div>
//           <div class="col-2">
//               <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
//                   <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
//               </div>
//           </div>
//           <div class="col-4">
//               <div
//                   class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
//                   <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
//                       value="1">
//                   <button class="btn btn-danger buttonDelete" type="button">X</button>
//               </div>
//           </div>
//       </div>`;     
  
//     shoppingCartRow.innerHTML = shoppingCartContent;
//     shoppingCartItemsContainer.append(shoppingCartRow);

//     shoppingCartRow
//         .querySelector('.buttonDelete')
//         .addEventListener('click', removeShoppingCartItem);

//     shoppingCartRow
//         .querySelector('.shoppingCartItemQuantity')
//         .addEventListener('change', quantityChanged);

//     updateShoppingCartTotal();
// }


// function updateShoppingCartTotal() {
//     let total = 0;
//     const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

//     const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

//     shoppingCartItems.forEach((shoppingCartItem) => {
//         const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
//             '.shoppingCartItemPrice'
//         );
//         const shoppingCartItemPrice = Number(
//             shoppingCartItemPriceElement.textContent.replace('€', '')
//         );
//         const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
//             '.shoppingCartItemQuantity'
//         );
//         const shoppingCartItemQuantity = Number(
//             shoppingCartItemQuantityElement.value
//         );
//         total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
//     });
//     shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
// }

// function removeShoppingCartItem(event) {
//     const buttonClicked = event.target;
//     buttonClicked.closest('.shoppingCartItem').remove();
//     updateShoppingCartTotal();
// }

// function quantityChanged(event) {
//     const input = event.target;
//     input.value <= 0 ? (input.value = 1) : null;
//     updateShoppingCartTotal();
// }




// function comprarButtonClicked() {
//     const shoppingCartItems = getItemsInShoppingCart();
//     addToLocalStorage('shoppingCart', shoppingCartItems);

//     updateShoppingCartTotal();
// }

// function getItemsInShoppingCart() {
//     const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
//     const arrShoppingCartItems = [];

//     shoppingCartItems.forEach((shoppingCartItem) => {
//         const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
//             '.shoppingCartItemQuantity'
//         );
//         const shoppingCartItemQuantity = Number(
//             shoppingCartItemQuantityElement.value
//         );
//         const itemId = shoppingCartItem.dataset.id;

//         const item = {
//             id: itemId,
//             qty: shoppingCartItemQuantity,
//         };

//         arrShoppingCartItems.push(item);
//     });
//     return arrShoppingCartItems;
// }

// function addToLocalStorage(key, items) {
//     localStorage.setItem(key, JSON.stringify(items));
// }

