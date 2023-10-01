const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000; // Usa el puerto proporcionado por Railway o 3000 por defecto
/* const QRPortalWeb = require('@bot-whatsapp/portal') */



app.get('/', (req, res) => {
    res.send('Bienvenido al Server'/* QRPortalWeb() */);
});


app.get('/db.json', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Ocurrió un error al obtener el archivo JSON');
        } else {
            const formattedJson = JSON.stringify(JSON.parse(data), null, 2);
            res.set('Content-Type', 'application/json');
            res.send(formattedJson);
        }
    });
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

// Exportar la función main
module.exports = {
    main: () => {
        console.log('Servidor inicializado desde server.js');
    }
};


