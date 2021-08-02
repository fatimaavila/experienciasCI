'use strict';

const getDB = require('../../bbdd/db');
const { formatDate, validate } = require('../../helpers');
const { newSchemaEditPassword } = require('../../validations/newSchemaEditPassword');

let connection;

const editUserPassword = async (req, res, next) => {
    try {
        connection = await getDB();

        await validate(newSchemaEditPassword, req.body);

        const { idUser } = req.params;
        const { oldPassword, newPassword } = req.body;

        if (req.userAuth.idUser !== Number(idUser)) {
            const error = new Error(
                'No tienes permisos para editar este usuario'
            );
            error.httpStatus = 403;
            throw error;
        }

        const [user] = await connection.query(
            `
            SELECT id FROM users WHERE id = ? AND pwd = SHA2(?, 512);
        `,
            [idUser, oldPassword]
        );

        if (user[0].length < 1) {
            const error = new Error('Contraseña antigüa incorrecta');
            error.httpStatus = 401;
            throw error;
        }

        await connection.query(
            `
            UPDATE users SET pwd = SHA2(?, 512), modifiedAt = ? WHERE id = ?;
        `,
            [newPassword, formatDate(new Date()), idUser]
        );

        res.send({
            status: 200,
            message: 'Contraseña actualizada con éxito',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editUserPassword;
