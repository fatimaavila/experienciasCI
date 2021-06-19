'use strict';

const getDB = require('../bbdd/db');

let connection;

const userExists = async (req, res, next) => {
    try {
        connection = await getDB();

        // recuperamos la query y extraemos el id_user
        const { idUser } = req.params;
        // cogemos el valor del user en [0]
        const [user] = await connection.query(
            `SELECT id FROM users WHERE id = ?;`,
            [idUser]
        );
        // comprobamos si llega algun usuario si no error
        if (user.length < 1) {
            const eror = new Error('Usuario no encontrado');
            error.httpStatus = 404;
            throw error;
        }
        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = userExists;
