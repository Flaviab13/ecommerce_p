// Obtener el carrito del almacenamiento local
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Obtener el contenedor de productos en el carrito
const cartContainer = document.querySelector('.checkout-lists');

// Generar elementos HTML para cada producto en el carrito
carrito.forEach(producto => {
    const productHTML = `
    <div class="card">
    <div class="card-image"><img src="${producto.imagen}" alt=""></div>
    <div class="card-details">
        <div class="card-name">${producto.nombre}</div>
        <div class="card-price">$54.99 </div>
        <div class="card-wheel">
            <button>-</button>
            <span>${producto.cantidad}</span>
            <button>+</button>
        </div>
    </div>
</div>
    `;

    // Crear un elemento div para el producto y establecer el HTML
    const productDiv = document.createElement('div');
    productDiv.innerHTML = productHTML;

    // Agregar el producto al contenedor del carrito
    cartContainer.appendChild(productDiv);
});