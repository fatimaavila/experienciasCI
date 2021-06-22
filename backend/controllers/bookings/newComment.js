'use strict';

const getDB = require('../../bbdd/db');

let connection;

const newComment = async(req,res,next) => {
    try {
        connection = await getDB();

        const { id_experience } = req.params;
        const { comment } = req.body;
        const { idUser } = req.userAuth;

        await connection.query(`
            UPDATE bookings
            SET comentario = ?
            WHERE id_experience = ? and id_user = ?;
        `,[comment,id_experience,idUser]);

        res.status(200).send({
            status: 'ok',
            data: {
                idExp : id_experience,
                idUser: idUser,
                comment: comment
            }
        })
    } catch (error) {
        next(error);
    } finally {
        if(connection) connection.release();
    }
}

module.exports = newComment;