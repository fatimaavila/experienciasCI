require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const app = express();

const { PORT } = process.env;

const authUser = require('./middlewares/authUser');


// ###############################################
// ## MIDDLEWARES RELACIONADAS CON DEPENDENCIAS ##
// ###############################################

const {
    deleteUser,
    editUser,
    editUserPassword,
    getUser,
    loginUser,
    newUser,
    recoverUserPassword,
    resetUserPassword,
    validateUser,
} = require('./controllers/users');


// Logger.
app.use(morgan('dev'));

// Traduce el body y lo transforma en un objeto JS.
app.use(express.json());

// Nos permite leer bodys en formato "form-data".
app.use(fileUpload());


// #################################
// ## MIDDLEWARES DE EXPERIENCIAS ##
// #################################


// #############################
// ## MIDDLEWARES DE USUARIOS ##
// #############################

app.post('/users/login', loginUser);
app.put('/users/:idUser', authUser, editUser);

// #############################
// ## MIDDLEWARES DE RESERVAS ##
// #############################


// ##########################
// ## MIDDLEWARES DE ERROR ##
// ##########################

// Middleware de error que captura los errores generados.
app.use((error,req,res,next) => { 
    console.log(error);
    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message
    })
});

// Middleware de error genérico.
app.use((req,res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not Found'
    })
})

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
