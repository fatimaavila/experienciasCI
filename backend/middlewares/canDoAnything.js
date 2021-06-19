const getDB = require('../bbdd/db');

const canDoAnything = async (req, res, next) => {
    let connection;

    try {

        connection = await getDB();

        const { idExp } = req.params;

        const [userExp] = await connection.query(
            `SELECT idUser FROM experiences WHERE id = ?;`,
            [idExp]
        );

        if (
            userExp[0].idUser !== req.userAuth.idUser &&
            req.userAuth.role !== 'admin'
        ) {
            const error = new Error(
                'No tienes permisos para editar esta entrada'
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
