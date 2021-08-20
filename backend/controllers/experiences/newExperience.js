const getDB = require('../../bbdd/db');
const { savePhoto, validate } = require('../../helpers');

const {
    newSchemaExperience,
} = require('../../validations/newSchemaExperience');

const newExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const {
            name,
            description,
            city,
            price,
            category,
            participants,
            dStart,
            dStop,
        } = req.body;

        await validate(newSchemaExperience, req.body);

        if (req.userAuth.rol !== 'admin') {
            const error = new Error(
                'El usuario no tiene permisos para crear una nueva experiencia'
            );
            error.httpStatus = 401;
            throw error;
        }

        const [newExperience] = await connection.query(
            `
               INSERT INTO experiences(descripcion, nombre, ciudad, precio, categoria, num_participantes, fecha_inicio, fecha_fin)
                VALUES(?, ?, ?, ?, ?, ? , ?, ?);
            `,
            [
                description,
                name,
                city,
                price,
                category,
                participants,
                dStart,
                dStop,
            ]
        );

        const { insertId: idExp } = newExperience;

        const photos = [];

        if (req.files) {
            for (const photo of Object.values(req.files.photo).slice(0, 3)) {
                const photoName = await savePhoto(photo);

                photos.push(photoName);

                await connection.query(
                    `INSERT INTO photos (url, id_experience, alt) VALUES (?, ?, ?);`,
                    [photoName, idExp, photoName]
                );
            }
        }

        res.send({
            status: 200,
            data: {
                id: idExp,
                name,
                description,
                city,
                price,
                category,
                participants,
                dStart,
                dStop,
                photos: {
                    ...photos,
                },
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release;
    }
};

module.exports = newExperience;
