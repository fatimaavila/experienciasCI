const getDB = require('../../bbdd/db');

const { formatDate } = require('../../helpers');

const voteBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.userAuth;
        const { idExp } = req.params;
        const { vote } = req.body;

        // Si el voto es menor que 1 o mayor que 5...
        if (vote < 1 || vote > 5) {
            const error = new Error('El voto debe estar entrew 1 y 5');
            error.httpStatus = 400;
            throw error;
        }

        // Comprobamos si el usuario actual ya ha votado anteriormente esta entrada.
        const [alreadyVote] = await connection.query(
            `SELECT valoracion FROM bookings WHERE id_user = ? AND id_experience = ?`,
            [idUser, idExp]
        );

        // Si la longitud de "alreadyVote" es mayor que 0 quiere decir que el usuario ya
        // ha votado.
        if (alreadyVote.length > 0) {
            const error = new Error(
                'Ya votaste esta experiencia anteriormente'
            );
            error.httpStatus = 403;
            throw error;
        }

        // Añadimos el voto a la tabla.
        await connection.query(
            `UPDATE bookings SET valoracion = ? WHERE id_user = ${idUSer} AND id_experience = ${idExp};`,
            [vote, idUser, idExp]
        );

        // Obtenemos la nueva media.
        const [newAvg] = await connection.query(
            `
                SELECT AVG(valoracion) AS votes
                FROM bookings                
                WHERE id_experience = ?;
            `,
            [idExp]
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
