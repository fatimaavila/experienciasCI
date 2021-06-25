const getDB = require('../../bbdd/db');

const { savePhoto } = require('../../helpers');

const addPhotoExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp } = req.params;

        if (req.userAuth.rol !== 'admin') {
            const error = new Error('No tienes permisos para añadir fotos');
            error.httpStatus = 401;
            throw error;
        }

        const [photoExperience] = await connection.query(
            `SELECT id FROM photos WHERE id_experience = ?;`,
            [idExp]
        );

        if (photoExperience.length >= 5) {
            const error = new Error(
                'Tienes 5 fotos asignadas a esta experiencia, no puedes subir más fotos'
            );
            error.httpStatus = 403;
            throw error;
        }

        let photoName;

        if (req.files && req.files.photo) {
            photoName = await savePhoto(req.files.photo);

            await connection.query(
                `INSERT INTO photos (url, id_experience) VALUES (?, ?);`,
                [photoName, idExp]
            );
        }

        res.send({
            status: 'ok',
            data: {
                photo: photoName,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = addPhotoExperience;
