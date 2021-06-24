const getDB = require('../../bbdd/db');
const { savePhoto, validate } = require('../../helpers');

const { newSchemaExperience } = require('../../validations/newSchemaExperience');


const newExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();


        await validate(newSchemaExperience, req.body);


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
        //const { idUser } = req.userAuth;
        if (req.userAuth.rol !== 'admin') {
            const error = new Error(
                'El usuario no tiene permisos para crear una nueva experiencia'
            );
            error.httpStatus = 401;
            throw error;
        }
        // Fecha actual.
        // const now = new Date();

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

        // Obtenemos el id de la nueva exp.
        const { insertId: idExp } = newExperience;

        // Si existen fotos las pusheamos en este array.
        const photos = [];

        // Si recibimos fotos a través de req.files...
        if (req.files) {
            for (const photo of Object.values(req.files.photo).slice(0, 3)) {
                // Guardamos la imagen en el disco y obtenemos su nombre.

                const photoName = await savePhoto(photo);

                photos.push(photoName);

                // Guardamos la foto en la base de datos.
                await connection.query(
                    `INSERT INTO photos (url, id_experience, alt) VALUES (?, ?, ?);`,
                    [photoName, idExp, photoName]
                );
            }
        }

        res.send({
            status: 'ok',
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
