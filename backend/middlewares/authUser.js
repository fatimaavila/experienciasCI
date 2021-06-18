'use stric';

const { getDB } = require('../bbdd/db.js');
const jwt = require('jsonwebtoken');

let connection;

const authUser = (req,res,next) => {
    try {
        connection = await getDB();

        const { authorization } = req.headers;

        if(!authorization) {
            const error = new Error('Faltan la autorización en la cabecera');
            error.httpStatus = 401;
            throw error;
        }

        // Almacenamos la info del token en una variable.
        let tokenInfo;

        // Verificamos si el token es válido.
        try {
            tokenInfo = jwt.verify(authorization,process.env.SECRET);
        } catch (error) {
            const err2 = new Error('Faltan la autorización en la cabecera');
            err2.httpStatus = 401;
            throw err2;
        }

        // Guardamos la info del token en una nueva propiedad de la request.
        req.userAuth = tokenInfo;

        next();
    } catch (error) {
        next(error);
    } finally {
        if(connection) connection.release();
    }
}

module.exports = { authUser };