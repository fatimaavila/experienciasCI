const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

const putBookingState = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        let { bookingState } = req.body;
        const { idUser } = req.userAuth;
        const { idBooking } = req.params;

        const [booking] = await connection.query(
            `
            SELECT id_user FROM bookings WHERE id = ?;
            `,
            [idBooking]
        );

        if (req.userAuth.idUser !== Number(booking[0].id_user)) {
            const error = new Error(
                'No tienes permisos para actualizar esta reserva'
            );
            error.httpStatus = 401;
            throw error;
        }

        if (bookingState > 1) {
            const error = new Error(
                'Los valores solo pueden ser booleanos numéricos'
            );
            error.httpStatus = 404;
            throw error;
        }

        const [updateState] = await connection.query(
            `UPDATE bookings SET estado = ? WHERE id = ?`,
            [bookingState, idBooking, idUser]
        );
        const [newState] = await connection.query(
            `SELECT estado , id FROM bookings WHERE id = ?`,
            [idBooking]
        );
        res.send({
            status: 200,
            data: {
                id: newState[0].id,
                user: booking[0].id_user,
                estado: newState[0].estado === 0 ? 'Disfrutada' : 'Disponible',
            },
        });
        console.log(newState);
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release;
    }
};

module.exports = putBookingState;
