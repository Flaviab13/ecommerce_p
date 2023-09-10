const app = require('./app');
/* const port = 4002; */

const port1 =app.get('port');

// crear localhost
async function main () {
    await app.listen(port1);
    //console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`Servidor corriendo en http://localhost:${port1}`);
}


main();
  



  
  
