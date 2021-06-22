'use strict';

const getDB = require('../../bbdd/db');
const { deletePhoto } = require('../../helpers');
let connection;
const deleteExperience = async (req, res, next) => {
    try {
        connection = await getDB();

        const { idExp } = req.params;

        const [photoExp] = await connection.query(
            `
            SELECT photo FROM photos WHERE idExp = ?; 
        `,
            [idExp]
        );

        if (photoExp.length > 0) {
            await deletePhoto(photoExp[0].photo);
        }

        await connection.query(
            `
            DELETE FROM experience WHERE id = ?
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
