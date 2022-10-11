const express = require('express');
const router = express.Router();
const path = require('path');

//Image PATH
const imgFolderPath = path.join(__dirname, '../img/');

router.get('/:imgName', (req, res) => {
    //este itemMock lo genero un poco mas arriba es solo para mostrar articulos ficticios seguramente despues se va
    const image = req.params.imgName;
    //${__dirname} es para pararme en el directorio que me encuentro
    //ahora le ${__dirname} no me sirve mas porque cambie de directorio, para esto instalo mediante npm i path en la consola el modulo PATH
// res.sendFile(`${__dirname}/img/${image}`)
res.sendFile(`${imgFolderPath}${image}`);
});

module.exports = router;