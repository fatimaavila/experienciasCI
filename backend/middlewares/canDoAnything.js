const getDB = require('../bbdd/db');

const canDoAnything = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp } = req.params;

        const [userExp] = await connection.query(
            `SELECT id_user FROM bookings WHERE id = ?;`,
            [idExp]
        );

        if (
            userExp[0].idUser !== req.userAuth.idUser &&
            req.userAuth.role !== 'admin'
        ) {
            const error = new Error(
                'No tienes permisos para editar esta experiencia'
            );
            error.httpStatus = 401;
            throw error;
        }

        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = canDoAnything;
