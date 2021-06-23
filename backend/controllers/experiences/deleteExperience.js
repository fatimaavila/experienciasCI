'use strict';

const getDB = require('../../bbdd/db');
const { deletePhoto } = require('../../helpers');

let connection;

const deleteExperience = async (req, res, next) => {
    try {
        connection = await getDB();

        const { idExp } = req.params;

        if(req.userAuth.rol !== 'admin') {
            const error = new Error('No tienes permisos para eliminar experiencias');
            error.httpStatus = 401;
            throw error;
        }

        const [photoExp] = await connection.query(
            `
            SELECT url FROM photos WHERE id_experience = ?; 
        `,
            [idExp]
        );

        if (photoExp.length > 0) {
            await deletePhoto(photoExp[0].url);
        }

        await connection.query(
            `
            DELETE FROM experiences WHERE id = ?
        `,
            [idExp]
        );

        res.status(200).send({
            status: 'ok',
            message: 'Experiencia Eliminada',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deleteExperience;
