const getDB = require('../../bbdd/db');

const deleteBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idBooking } = req.params;
        const [booking] = await connection.query(
            `
            SELECT id_user FROM bookings WHERE id = ?;
            `,
            [idBooking]
        );

        if (req.userAuth.idUser !== Number(booking[0].id_user)) {
            const error = new Error(
                'No tienes permisos para cancelar esta reserva'
            );
            error.httpStatus = 401;
            throw error;
        }
        await connection.query(
            `DELETE FROM bookings WHERE id = ?;
            `,
            [idBooking]
        );
        res.send({
            status: 200,
            message: 'Has cancelado la reserva correctamente',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};
module.exports = deleteBooking;
