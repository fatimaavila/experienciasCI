const getDB = require('../../bbdd/db');

const getBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idBook } = req.params;

        // Obtenemos la información de la reserva.
        const [booking] = await connection.query(
            `
                SELECT *
                FROM bookings
                WHERE id = ?;
            `,
            [idBook]
        );

        res.send({
            status: 'ok',
            data: {
                ...booking[0],
                photos,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getBooking;
