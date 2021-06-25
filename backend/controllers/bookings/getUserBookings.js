const getDB = require('../../bbdd/db');

const getUserBookings = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const { idUser } = req.params;
        if (req.userAuth.idUser !== Number(idUser)) {
            const error = new Error(
                'No tienes permisos para ver estas reservas'
            );
            error.httpStatus = 403;
            throw error;
        }

        const [booking] = await connection.query(
            `SELECT *
             FROM bookings
             WHERE id_user = ?;
            `,
            [idUser]
        );

        res.send({
            status: 'ok',
            data: {
                bookings: {
                    ...booking,
                },
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getUserBookings;
