const getDB = require('../../bbdd/db');

const getExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp } = req.params;

        const [experience] = await connection.query(
            `
            SELECT * FROM experiences WHERE id = ?;
            `,
            [idExp]
        );

        const [rating] = await connection.query(
            `
            SELECT ROUND(IFNULL(AVG(book.valoracion),0),1) AS rating 
            FROM bookings book 
            WHERE book.id_experience = ?;
        `,
            [idExp]
        );

        const [photos] = await connection.query(
            `SELECT id, url, alt FROM photos WHERE id_experience = ?`,
            [idExp]
        );

        const [comment] = await connection.query(
            `SELECT comentario FROM bookings WHERE id_experience = ?`,
            [idExp]
        );

        res.send({
            status: 'ok',
            data: {
                ...experience[0],
                rating: rating[0].rating,
                comentarios: [...comment],
                photos: [...photos],
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getExperience;
