const express = require("express");
const app = express();
const path = require('path')
const morgan = require('morgan');
const mysql = require('mysql');
/* const myConnection = require('express-myConnetion'); */


const port = 4003;


// configuración
app.set('port',`${port}`);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// Configurar Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// ver inicio
/* app.use(express.static('public'));
const indexRouter = require("./routes/index");
app.use("/routes", express.static(path.join(__dirname, "routes"))); // Agrega esta línea
app.use("/", indexRouter); */



// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
/* var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'toor',
    password : 'contraseña',
    port     : `${port}`,
    database : 'crudmysql'
  });
 */

/* app.use(connection); */

/* connection.connect(); */



// Routes
/* app.use(require('./routes/index')); */
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Static
 app.use(express.static(path.join(__dirname,'public')));

 // entrar al boton VerTienda y entrar al header 
 app.get("/Tienda", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
  }); 

  
// entrar al header productos

app.get("/Productos", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'products.html'));
    //res.sendFile(path.join(__dirname, 'views', 'ejs', 'productos.ejs'));
  });
  

  // entrar al header carrito

app.get("/Carrito", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'cart.html'));  
});


  // entrar al header sucursales

  app.get("/Sucursales", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'localized.html'));  
  });


  // entrar al header contacto

app.get("/Contacto", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'contact.html'));
});


// para manejar el envío del formulario y mostrar el mensaje de confirmación
app.post("/contact", (req, res) => {
  const { name, emailaddress, subject } = req.body;
  
  // Aquí puedes procesar los datos del formulario, como enviar un correo electrónico, guardarlos en una base de datos, etc.

  // Devuelve una respuesta adecuada al cliente.
  res.status(200).send("Mensaje enviado correctamente.");
});

// 404 handler
app.use((req,res,next)=>{
    res.status(404).send('404 Not found');
})


module.exports=app;