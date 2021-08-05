'use strict';

const getDB = require('../../bbdd/db');
const { formatDate, validate } = require('../../helpers');
const { newSchemaEditUser } = require('../../validations/newSchemaEditUser');

let connection;

const editUser = async (req, res, next) => {
    try {
        connection = await getDB();

        const { idUser } = req.params;
        let { email, ccc, address, phone, bio, cp } = req.body;
        let avatar = req.files;
        console.log(req.userAuth.idUser, idUser);
        const now = new Date();

        await validate(newSchemaEditUser, req.body);

        if (req.userAuth.idUser !== Number(idUser)) {
            const error = new Error(
                'No tienes permisos para editar este usuario'
            );
            error.httpStatus = 401;
            throw error;
        }

        const [user] = await connection.query(
            `
            SELECT id, email, ccc, direccion, telefono, bio, cp, avatar FROM users WHERE id = ?;
        `,
            [idUser]
        );

        email = !email ? user[0].email : email;
        ccc = !ccc ? user[0].ccc : ccc;
        address = !address ? user[0].direccion : address;
        phone = !phone ? user[0].telefono : phone;
        bio = !bio ? user[0].bio : bio;
        cp = !cp ? user[0].cp : cp;
        avatar = !avatar ? user[0].avatar : avatar;

        if (email && email !== user[0].email) {
            const [existingEmail] = await connection.query(
                `SELECT id FROM users WHERE email = ?;`,
                [email]
            );

            if (existingEmail.length > 0) {
                const error = new Error('Ya existe un usuario con ese email');
                error.httpStatus = 409;
                throw error;
            }

            await connection.query(
                `UPDATE users SET email = ?, modifiedAt = ? WHERE id = ?;`,
                [email, formatDate(now), idUser]
            );
        }

        if (phone && phone !== user[0].telefono) {
            const [existingPhone] = await connection.query(
                `SELECT id FROM users WHERE telefono = ?;`,
                [phone]
            );

            if (existingPhone.length > 0) {
                const error = new Error(
                    'Ya existe un usuario con ese telefono'
                );
                error.httpStatus = 409;
                throw error;
            }

            await connection.query(
                `UPDATE users SET telefono = ?, modifiedAt = ? WHERE id = ?;`,
                [phone, formatDate(now), idUser]
            );
        }

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
            UPDATE users SET ccc = ?, direccion = ?, bio = ?, cp = ?, modifiedAt = ? WHERE id = ?;
        `,
            [ccc, address, bio, cp, formatDate(now), idUser]
        );

        res.send({
            status: 200,
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
