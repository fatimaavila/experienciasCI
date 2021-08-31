'use strict';

const getDB = require('../../bbdd/db');

const getFinalStateBooking = async (req, res, next) => {
    let connection;
    try {
        connection = await getDB();
        const { idExp, dateBooking } = req.params;
        console.log(idExp, dateBooking);

        const [booking] = await connection.query(
            `SELECT * FROM bookings WHERE id_experience = ? AND fecha_reserva = ?;`,
            [idExp, dateBooking]
        );
        res.send({
            status: 200,
            data: [...booking],
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getFinalStateBooking;
