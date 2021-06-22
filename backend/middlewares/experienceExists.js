'use strict';

const getDB = require('../bbdd/db');


let connection;

const experienceExists = async(req, res, next) => {

    try {
        connection = await getDB();

        const { idExp } = req.params;
        const [exp] = await connection.query(
            `
            SELECT id FROM experiences WHERE id = ?
        `,
            [idExp]
        );

        if (exp.length < 1) {
            const error = new Error('Usuario no encontrado');
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

module.exports = experienceExists;
