const getDB = require('../../bbdd/db');

const { formatDate } = require('../../helpers');

const voteBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idBooking } = req.params;
        const { vote } = req.body;
        const [booking] = await connection.query(
            `SELECT id_user, id_experience, valoracion FROM bookings WHERE id = ?;`,
            [idBooking]
        );
        if (req.userAuth.idUser !== Number(booking[0].id_user)) {
            const error = new Error(
                'No tienes permisos para votar esta reserva'
            );
            error.httpStatus = 401;
            throw error;
        }

        if (vote < 1 || vote > 5) {
            const error = new Error('El voto debe estar entre 1 y 5');
            error.httpStatus = 400;
            throw error;
        }

        if (booking[0].valoracion > 0) {
            const error = new Error(
                'Ya votaste esta experiencia anteriormente'
            );
            error.httpStatus = 403;
            throw error;
        }

        await connection.query(
            `UPDATE bookings SET valoracion = ? WHERE id_user = ? AND id_experience = ?;`,
            [vote, booking[0].id_user, booking[0].id_experience]
        );

        const [newAvg] = await connection.query(
            `
                SELECT AVG(valoracion) AS votes
                FROM bookings                
                WHERE id_experience = ?;
            `,
            [booking[0].id_experience]
        );

        res.send({
            status: 'ok',
            data: {
                votes: newAvg[0].votes,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = voteBooking;
