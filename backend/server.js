require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const app = express();
const { initDB } = require('./bbdd/initDB');
const { PORT } = process.env;
initDB();
// Logger.
app.use(morgan('dev'));

// Traduce el body y lo transforma en un objeto JS.
app.use(express.json());

// Nos permite leer bodys en formato "form-data".
app.use(fileUpload());

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
