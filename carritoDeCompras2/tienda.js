// (ctrl + k) + (crtl + c) comentar
// (ctrl + k) + (crtl + U) descomentar

//document.querySelectorAll nos va a traer todos los archivos de la clase que pongamos dentro del parentesis
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
// console.log("🚀 ~ file: tienda.js ~ line 122 ~ addToShoppingCartButtons", addToShoppingCartButtons)

addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);

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

    // hago un llamado a una funcion para trabajar los datos obtenidos
    addItemToShoppingCart(itemTitle, itemImage, itemPrice);
}

function addItemToShoppingCart(itemTitle, itemImage, itemPrice) {

    //Que no se dupliquen los pedidos, en caso de hacer doble click en el añadir que aparezca una sola vez pero que sume 2 
    const elementTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementTitle.length; i++) {
        //solo entra en el if si ya existe en el listado, por eso salimos con el "return" para que no ejecute el codigo de abajo, solo con los repetidos
        if (elementTitle[i].innerText === itemTitle) {
            
            //estoy parado en el <h6> del titulo con un parentElement subo al <div class="shopping-cart...", con el siguiente a <div class="col-6"> con el ultimo me posiciono arriba en "<div class="row shoppingCartItem"> dado que quiero llegar hasta uno de sus hijos que es "shoppingCartItemQuantity", es todo sobre el codigo que esta en verde un poco mas abajo
           let elementQuantity = elementTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
           elementQuantity.value ++;

           //esto que sumo ahora es un "toast" de boostrap, es importante sumar la referencia en el html llamando a boostrap
           $('.toast').toast('show');
           updateShoppingCartTotal();
           return
        }
    }
    

    //ahora vamos a llenar el carrito
    const shoppingCartRow = document.createElement('div');

    //con "alt + 96" pongo la comillas especiales (`) para citar un bloque de codigo "string literal"
    const shoppingCartContent = `
        <div class="row shoppingCartItem">
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

function comprarButtonClicked(event) {
shoppingCartItemsContainer.innerHTML = '';
updateShoppingCartTotal();

}