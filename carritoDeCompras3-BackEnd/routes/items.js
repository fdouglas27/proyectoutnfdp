// const { Router } = require('express');
// const { json } = require('express'); no se porque los genera??
const express = require('express');
const getItemById = require('../data/getItemById');
const item = require('../models/item');
const router = express.Router();



//Models
const Item = require('../models/item');

//Mock (el mock ya no lo necesito, ya cargue todo dentro de la base de datos)
//const itemsMock = require('../mock/items.json');

//Get-ITEMS en este caso alcanza con solo "/" despues del GET dado que ya indicamos en el app.js cuando llamamos con "app.use('/items', itemsRoutes);" la carpeta items, por eso con "/" le indicamos que es la raiz
router.get('/',async (req, res) => {
    //este itemMock lo genero un poco mas arriba es solo para mostrar articulos ficticios seguramente despues se va
    //ya saco el mock porque ahora me voy a conectar a la base de datos
    //res.send(itemsMock);
    try {
        const itemsFromDB = await Item.find();
        res.json(itemsFromDB);
    } catch (error) {
        res.json({message: error.message });
    }
});

//Get-ITEM es una funcion parecida a la de arriba pero solo me trae un item en vez de todos los items
router.get('/item',async (req, res) => {
    const itemId = req.body.itemId;
    try {
        //ahora cambiamos esta linea de codigo por otra
        // const itemFromDB = await Item.findById(itemId);
        const itemFromDB = await getItemById(itemId);
        res.json(itemFromDB);
    } catch (error) {
        res.json({ message: error.message });
    }
});

//Create ITEMS
//Con la palabra "async" definimos que la funcion es asincrona
router.post('/',async (req, res) => {
    console.log(req.body)
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
    });

    try {
        //con await buscamos que la conexion con la base de datos se de correctamente
        const newItem = await item.save();
        res.json(newItem);
    } catch (error) {
        res.json({message: error.message});
    }
})

module.exports = router;

//pk_test_51Lq0gKCdXELfu1CY5oiLaEDzUUVsKad75Gg4raAWJubX27uUNeaW3IHBDesAp965brQ7RDhieOYQxTE0MF7ZIfxR00eCt1DibB

//sk_test_51Lq0gKCdXELfu1CYoX7NBvGb4qGledcXhPSm4zp3weIqizlWA8U6vLDxXTXh84DAdwedS4d9thvpba9ODKGRkdZc00x311pHfb