const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const registrosRouter = require('./routes/registros');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error(err));

// Rutas
app.use('/api/registros', registrosRouter); // Verifica que esta línea esté presente

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
