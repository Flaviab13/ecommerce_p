// importar los datos
/* const { productosData } = require('./productos.js'); */
/* import { productosData } from './productos.js';
 */
// Manejar clic en "Añadir al carrito"
document.querySelectorAll('.btn-success').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productoSeleccionado = {
            nombre: data[index].nombre,
            descripcion: data[index].descripcion,
            imagen: data[index].image,
            cantidad: parseInt(document.querySelectorAll('input[type="number"]')[index].value)
        };
        

        /* document.querySelectorAll('.btn-success').forEach(button => {
            button.addEventListener('click', (event) => {
                // Obtener el índice del botón clickeado
                const index = event.target.getAttribute('data-index');
                // Acceder a los datos del producto usando el índice
                const productoSeleccionado = {
                    nombre: productosData[index].nombre,
                    descripcion: productosData[index].descripcion,
                    imagen: productosData[index].image,
                    cantidad: parseInt(document.querySelectorAll('input[type="number"]')[index].value)
                }; */
        // Obtener el carrito actual del almacenamiento local o crear uno vacío
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto seleccionado al carrito
        carrito.push(productoSeleccionado);

        // Guardar el carrito actualizado en el almacenamiento local
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
});