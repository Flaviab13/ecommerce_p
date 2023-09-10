// Ruta al archivo JSON de productos
const productosF = 'data/productos.json';

// Obtener el contenedor de productos
const productsContainer = document.getElementById('products');

// Cargar datos del archivo JSON
fetch(productosF)
    .then(response => response.json())
    .then(data => {
        // Recorrer los datos y generar los elementos HTML para cada producto
        data.forEach(producto => {
            const productHTML = `
                <div class="item col-xs-6 col-lg-6">
                    <div class="thumbnail">
                        <img class="group list-group-image" src="${producto.image}" alt="" />
                        <div class="caption">
                            <h4 class="group inner list-group-item-heading">${producto.nombre}</h4>
                            <p class="group inner list-group-item-text">${producto.descripcion}</p>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <input type="number" class="form-control" min="0" max="100" />
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <a class="btn btn-success" href="/Carrito" ><p>Añadir al carrito</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

/*             // Agregar el producto al contenedor
            productsContainer.innerHTML += productHTML; */
            // Crear un elemento div para contener el producto y establecer el HTML
            const productDiv = document.createElement('div');
            productDiv.className = 'item col-xs-6 col-lg-6';
            productDiv.innerHTML = productHTML;

             // Agregar el producto al contenedor
             productsContainer.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });

// Después de cargar los datos de productos en productos.js
/* module.exports = { productosData: data }; */

/* export const productosData = data; */