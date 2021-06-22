const getDB = require('../../bbdd/db');

const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const { search, ciudad, precio, disponibilidad } = req.query;
        let result;
        const [city] = await connection.query(
            `
            SELECT ciudad FROM experiences GROUP BY ciudad;
            `
        );
        const validateCity = city.map((city) => {
            return city.ciudad;
        });
        let sqlExperience = 'SELECT * FROM experiences';
        let separador = 'WHERE';

        if (search) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} nombre LIKE ? ;
                `,
                [`%${search}%`]
            );
        } else {
            [result] = await connection.query(
                `
                SELECT * FROM experiences ;
                `
            );
        }
        if (precio) {
            [result] = await connection.query(
                `
                ${sqlExperience} WHERE precio LIKE ? ;
                `,
                [`%${precio}%`]
            );
        } else {
            [result] = await connection.query(
                `
                SELECT * FROM experiences ;
                `
            );
        }
        if (ciudad) {
            [result] = await connection.query(
                `
                ${sqlExperience} where ciudad
                `
            );
        }

        res.send({
            status: 'ok',
            data: result,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};
module.exports = { getAllExperiences };
