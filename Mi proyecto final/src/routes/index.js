const {Router}=require('express');
const router= Router();
const path = require("path"); // Importa el módulo path


/* GET home page. */
router.get('/',(req,res)=>{
    res.render('index',{ title: "Tienda de Alfajores" });
});

/* POST home page. */
// Ruta para manejar la acción de "Ver Tienda"

 router.post('/Tienda', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
  });
  

  // Ruta para manejar la acción de "Ver Productos"

 router.post('/Productos', (req, res)=> {
  res.sendFile(path.join(__dirname, 'public', 'html', 'products.html'));
});


// Ruta para manejar la acción de "Añadir al carrito"

 router.post('/Carrito', (req, res)=> {
  res.sendFile(path.join(__dirname, 'public', 'html', 'cart.html'));
});
  





module.exports=router;