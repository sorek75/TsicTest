// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/farmacia');

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String
});

const Producto = mongoose.model('Producto', ProductoSchema);

app.get('/api/productos', async (req, res) => {
    const productos = await Producto.find().select('nombre precio descripcion -_id');
    res.json(productos);
});

app.use(express.static('back'));

app.listen(3000, () => console.log('Server running on port 3000'));