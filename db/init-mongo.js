db = db.getSiblingDB('farmacia');
db.createCollection('productos');

var productos = [
    { nombre: 'Producto 1', precio: 100, descripcion: 'Este es el producto 1' },
    { nombre: 'Producto 2', precio: 200, descripcion: 'Este es el producto 2' },
    { nombre: 'Producto 3', precio: 300, descripcion: 'Este es el producto 3' },
    // Agrega más productos aquí
];

db.productos.insert(productos);