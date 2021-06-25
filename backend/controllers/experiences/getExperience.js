const getDB = require('../../bbdd/db');

const getExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp } = req.params;

        // Obtenemos la información de la exp.
        const [experience] = await connection.query(
            `
            SELECT ex.*, book.id, ROUND(AVG(book.valoracion),1) AS rating 
            FROM experiences ex 
            LEFT JOIN bookings book ON ex.id = book.id_experience 
            WHERE ex.id = ?
            GROUP BY book.id;
            `,
            [idExp]
        );

        // Obtenemos la información de las fotos asiganadas a la exp.
        const [photos] = await connection.query(
            `SELECT id, url, alt FROM photos WHERE id_experience = ?`,
            [idExp]
        );

        const [comment] = await connection.query(`SELECT comentario FROM bookings WHERE id_experience = ?`,[idExp]);

        res.send({
            status: 'ok',
            data: {
                ...experience[0],
                comentario: {
                    ...comment
                },
                photos: {
                    ...photos
                }
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getExperience;
