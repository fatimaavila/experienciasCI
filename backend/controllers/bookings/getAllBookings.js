'use strict';

const getDB = require('../../bbdd/db');

let connection;

const getAllBookings = async (req, res, next) => {
    try {
        connection = await getDB();

        if (req.userAuth.rol !== 'admin') {
            const error = new Error(
                'No tienes permisos para realizar esta acción'
            );
            error.httpStatus = 404;
            throw error;
        }

        const [booking] = await connection.query(`
            SELECT * FROM bookings;
        `);

        res.status(200).send({
            status: 200,
            data: {
                booking: booking,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getAllBookings;
