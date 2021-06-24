const getDB = require('../../bbdd/db');

const getExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp } = req.params;

        const [experience] = await connection.query(
            `
                SELECT *
                FROM experiences
                WHERE id = ?;
            `,
            [idExp]
        );

        const [photos] = await connection.query(
            `SELECT id, url, alt FROM photos WHERE id_experience = ?`,
            [idExp]
        );

        res.send({
            status: 'ok',
            data: {
                ...experience[0],
                photos: {
                    ...photos,
                },
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getExperience;
