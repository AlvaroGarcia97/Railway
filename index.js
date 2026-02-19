const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

// Railway rellena estas variables automáticamente si creas el servicio MySQL
const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

app.get('/', (req, res) => {
    db.connect((err) => {
        if (err) {
            res.send('<h1>Error de conexión a la base de datos: ' + err.message + '</h1>');
        } else {
            res.send('<h1>¡Hola Mundo! Conexión a MySQL establecida correctamente.</h1>');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
