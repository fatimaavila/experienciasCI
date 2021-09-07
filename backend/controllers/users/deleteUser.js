const getDB = require('../../bbdd/db');

const {
    deletePhoto,
    formatDate,
    generateRandomString,
} = require('../../helpers');

const deleteUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.params;

        if (
            Number(idUser) === 1 ||
            Number(idUser) === 2 ||
            Number(idUser) === 3
        ) {
            const error = new Error(
                'Los usuarios administradores no pueden ser eliminados'
            );
            error.httpStatus = 403;
            throw error;
        }

        if (
            req.userAuth.idUser !== Number(idUser) &&
            req.userAuth.rol !== 'admin'
        ) {
            const error = new Error(
                'No tienes permisos para eliminar a este usuario'
            );
            error.httpStatus = 401;
            throw error;
        }

        const [user] = await connection.query(
            `SELECT avatar FROM users WHERE id = ?;`,
            [idUser]
        );

        if (user[0].avatar) {
            await deletePhoto(user[0].avatar);
        }

        await connection.query(
            `
                UPDATE users 
                SET pwd = ?, nombre = "[deleted]", avatar = NULL, active = 0, deleted = 1, modifiedAt = ? 
                WHERE id = ?;
            `,
            [generateRandomString(40), formatDate(new Date()), idUser]
        );

        res.send({
            status: 200,
            message: 'Usuario eliminado correctamente',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteUser;
