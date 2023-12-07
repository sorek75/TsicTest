// public/script.js
fetch('/api/productos')
    .then(response => response.json())
    .then(productos => {
        const productosDiv = document.getElementById('productos');
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';
            productoDiv.innerHTML = `
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>${producto.descripcion}</p>
            `;
            productosDiv.appendChild(productoDiv);
        });
    });