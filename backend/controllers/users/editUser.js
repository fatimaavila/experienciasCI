'use strict';

const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

let connection;

const editUser = async (req, res, next) => {
    try {
        connection = await getDB();

        const { idUser } = req.params;
        const { email, ccc, address, phone, bio, cp } = req.body;
        const avatar = req.files;

        const now = new Date();

        if (
            !email &&
            !ccc &&
            !address &&
            !phone &&
            !bio &&
            !cp &&
            !(req.files && req.files.avatar)
        ) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        if (req.userAuth.idUser !== Number(idUser)) {
            const error = new Error(
                'No tienes permisos para editar este usuario'
            );
            error.httpStatus = 401;
            throw error;
        }

        const [userEmail] = await connection.query(
            `
            SELECT id FROM users WHERE email = ?;
        `,
            [email]
        );

        if (userEmail.length > 0) {
            const error = new Error('Ya existe un usuario con ese email');
            error.httpStatus = 401;
            throw error;
        }

        const [userTel] = await connection.query(
            `
            SELECT telefono FROM users WHERE email = ?;
        `,
            [email]
        );

        if (userTel.length > 0) {
            const error = new Error('Ya existe un usuario con ese teléfono');
            error.httpStatus = 401;
            throw error;
        }

        const [user] = await connection.query(
            `
            SELECT avatar FROM users WHERE id = ?;
        `,
            [idUser]
        );

        if (avatar) {
            if (user[0].avatar) {
                await deletePhoto(req.files.avatar);
            }

            const avartarName = savePhoto(req.files.avatar);

            await connection.query(
                `
                UPDATE users SET avatar = ?, modifiedAt = ? WHERE id = ?;
            `,
                [avartarName, formatDate(now), idUser]
            );
        }

        await connection.query(
            `
            UPDATE users SET email = ? OR ccc = ? OR direccion = ? OR 
                telefono = ? OR bio = ? OR cp = ? OR modifiedAt = ?
                WHERE id = ?;
        `,
            [email, ccc, address, phone, bio, cp, formatDate(now), idUser]
        );

        res.status(200).send({
            status: 'ok',
            data: {
                id: idUser,
                ...req.body,
                modifiedAt: now,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editUser;
