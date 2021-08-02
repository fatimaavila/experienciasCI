const getDB = require('../../bbdd/db');

const validateUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { registrationCode } = req.params;

        const [user] = await connection.query(
            `SELECT id FROM users WHERE registrationCode = ?;`,
            [registrationCode]
        );

        if (user.length < 1) {
            const error = new Error(
                'No hay usuarios pendientes de validar con este código'
            );
            error.httpStatus = 404;
            throw error;
        }

        await connection.query(
            `UPDATE users SET active = true, registrationCode = NULL WHERE registrationCode = ?;`,
            [registrationCode]
        );

        res.send({
            status: 200,
            message: 'Usuario verificado',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = validateUser;
