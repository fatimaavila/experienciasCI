const getDB = require('../../bbdd/db');

const getBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idBooking } = req.params;
        const { idUser } = req.userAuth;
        if (req.userAuth.idUser !== Number(idUser)) {
            const error = new Error(
                'No tienes permisos para eliminar la reserva'
            );
            error.httpStatus = 403;
            throw error;
        }
<<<<<<< HEAD
        console.log(idBooking);
=======
>>>>>>> 4e6cb0e635aa6525b4ff350f008db6a9e5e76e28

        const [booking] = await connection.query(
            `SELECT *
             FROM bookings
             WHERE id = ?;
            `,
            [idBooking]
        );

        res.send({
            status: 'ok',
            data: {
                ...booking[0],
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getBooking;
