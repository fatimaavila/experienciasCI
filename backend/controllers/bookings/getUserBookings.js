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
        const experience = await Promise.all(
            booking.map(async (exp) => {
                const [infoExperience] = await connection.query(
                    `SELECT nombre
                    FROM experiences
                    WHERE id = ?;`,
                    [exp.id_experience]
                );
                return {
                    ...exp,
                    experience: infoExperience.map((nombre) => nombre),
                };
            })
        );

        res.send({
            status: 200,
            data: experience,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getUserBookings;
