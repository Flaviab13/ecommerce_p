/* Agrego el header Tienda */

document.addEventListener('DOMContentLoaded', function () {
    const textLink = document.getElementById('text');
    
    textLink.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = "/Tienda";
    });
  
    const headerLink1 = document.getElementById('header1');
    
    headerLink1.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = "/Tienda";
    });

    const headerLink2 = document.getElementById('header2');
    
    headerLink2.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = "/Productos";
    });


    const headerLink3 = document.getElementById('header3');
    
    headerLink3.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = "/Carrito";
    });

    const headerLink4 = document.getElementById('header4');
    
    headerLink4.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = "/Sucursales";
    });

    const headerLink5 = document.getElementById('header5');
    
    headerLink5.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = "/Contacto";
    });


  });