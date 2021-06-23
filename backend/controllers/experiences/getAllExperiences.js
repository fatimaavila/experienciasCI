const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');
const getAllExperiences = async (req, res, next) => {
    let connection;
    const now = new Date();

    try {
        connection = await getDB();
        const {
            search,
            ciudad,
            precio1,
            precio2,
            precio3,
            precio4,
            categorias,
            disp,
            fecha_inicio,
            fecha_fin,
        } = req.query;
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
                 ${sqlExperience} 
                 `
            );
        }
        if (precio1) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio BETWEEN 0 AND 50;
                `
            );
        }

        if (precio2) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio BETWEEN 51 AND 100;
                `
            );
        }
        if (precio3) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio BETWEEN 101 AND 200;
                `
            );
        }
        if (precio4) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio > 200;
                `
            );
        }
        console.log([result]);
        if (ciudad) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} ciudad LIKE ? ;
                `,
                [`%${ciudad}%`]
            );
        }
        if (categorias) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} categorias LIKE ? ;
                `,
                [`%${categorias}%`]
            );
        }
        if (disp) {
            [result] = await connection.query(
                `
                 ${sqlExperience} ${separador} disp LIKE ? ;
                 `,
                [`%${disp}%`]
            );
        }
        /*    if (fecha_inicio > 0 && fecha_fin > 0) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} fecha_inicio BETWEEN fecha_fin AND ${formatDate(
                    now
                )};
                `
            ); 
        } */

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
module.exports = getAllExperiences;
