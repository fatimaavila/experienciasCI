'use stric';

const getDB = require('../bbdd/db');
const jwt = require('jsonwebtoken');

let connection;

const authUser = async (req, res, next) => {
    try {
        connection = await getDB();

        const { authorization } = req.headers;
        console.log('auth', authorization);

        if (!authorization) {
            const error = new Error('Faltan la autorización en la cabecera');
            error.httpStatus = 401;
            throw error;
        }

        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET);
        } catch (error) {
            const err2 = new Error('Token no válido');
            err2.httpStatus = 401;
            throw err2;
        }

        req.userAuth = tokenInfo;

        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = authUser;
