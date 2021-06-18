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

        // Comprobamos si el usuario que intenta borrar no es el propio usuario
        // y además no es un administrador.
        if (
            req.userAuth.idUser !== Number(idUser) &&
            req.userAuth.role !== 'admin'
        ) {
            const error = new Error(
                'No tienes permisos para eliminar a este usuario'
            );
            error.httpStatus = 401;
            throw error;
        }

        // Obtenemos el nombre del avatar.
        const [user] = await connection.query(
            `SELECT avatar FROM users WHERE id = ?;`,
            [idUser]
        );

        // Si el usuario tiene avatar se elimina.
        if (user[0].avatar) {
            await deletePhoto(user[0].avatar);
        }

        // Hacemos un update en la tabla de usuarios .
        await connection.query(
            `
                UPDATE users 
                SET password = ?, name = "[deleted]", avatar = NULL, active = 0, deleted = 1, modifiedAt = ? 
                WHERE id = ?;
            `,
            [generateRandomString(40), formatDate(new Date()), idUser]
        );

        res.send({
            status: 'ok',
            message: 'Usuario eliminado correctamente',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteUser;
