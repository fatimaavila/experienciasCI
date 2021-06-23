'use strict';

const getDB = require('../../bbdd/db');
const { validate } = require('../../helpers');
let connection;
const { newSchemaComment } = require('../../validations');
const newComment = async (req, res, next) => {
    try {
        connection = await getDB();
        const { idBooking } = req.params;
        const { comment } = req.body;
        await validate(newSchemaComment, req.body);
        const [booking] = await connection.query(
            `SELECT id_user, id_experience, comentario FROM bookings WHERE id = ?;`,
            [idBooking]
        );
        if (req.userAuth.idUser !== Number(booking[0].id_user)) {
            const error = new Error(
                'No tienes permisos para votar esta reserva'
            );
            error.httpStatus = 401;
            throw error;
        }

        if (booking[0].comentario !== null) {
            const error = new Error(
                'Ya comentaste esta experiencia anteriormente'
            );
            error.httpStatus = 403;
            throw error;
        }
        await connection.query(
            `
            UPDATE bookings
            SET comentario = ?
            WHERE id_experience = ? and id_user = ?;
        `,
            [comment, booking[0].id_experience, booking[0].id_user]
        );

        res.status(200).send({
            status: 'ok',
            data: {
                idExp: booking[0].id_experience,
                idUser: booking[0].id_user,
                comment: comment,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = newComment;
