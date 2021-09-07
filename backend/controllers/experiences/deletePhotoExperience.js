const getDB = require('../../bbdd/db');

const { deletePhoto } = require('../../helpers');
const { PUBLIC_HOST, UPLOADS } = process.env;

const deletePhotoExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp, idPhoto } = req.params;

        if (req.userAuth.rol !== 'admin') {
            const error = new Error('No tienes permisos para eliminar fotos');
            error.httpStatus = 401;
            throw error;
        }
        const [photo] = await connection.query(
            `SELECT url FROM photos WHERE id = ? AND id_experience = ?;`,
            [idPhoto, idExp]
        );
        if (photo.length < 1) {
            const error = new Error('La foto no existe');
            error.httpStatus = 404;
            throw error;
        }

        await deletePhoto(photo[0].url);

        await connection.query(
            `DELETE FROM photos WHERE id = ? AND id_experience = ?;`,
            [idPhoto, idExp]
        );
        const [photos] = await connection.query(
            `SELECT id, url, alt FROM photos WHERE id_experience = ?`,
            [idExp]
        );
        const photosExperience = photos.map((photo) => {
            return {
                photo: `${PUBLIC_HOST}${UPLOADS}${photo.url}`,
                id: photo.id,
            };
        });

        res.send({
            status: 200,
            message: 'Foto eliminada',
            data: { photos: photosExperience },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deletePhotoExperience;
