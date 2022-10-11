//aca vamos a configurar como se van a ver los datos

const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    //id no es necesario, lo va a poner mongoose
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('item', itemSchema);