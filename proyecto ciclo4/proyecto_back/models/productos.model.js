const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:70},
    precio:{type: Number, required: true, max:1000000},
});

module.exports = mongoose.model("productos", ProductosSchema);