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

        const infoUserBooking = await Promise.all(
            booking.map(async (info) => {
                const [userInfo] = await connection.query(
                    `
                    SELECT username, email FROM users WHERE id = ?
                `,
                    [info.id_user]
                );

                return {
                    ...info,
                    userInfo: userInfo.map((data) => ({
                        username: data.username,
                        email: data.email,
                    })),
                };
            })
        );

        res.status(200).send({
            status: 200,
            data: infoUserBooking,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getAllBookings;
