const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');
const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const { search, city, price, category, disp, dStart, dEnd } = req.query;
        let result;
        const [citys] = await connection.query(
            `
            SELECT ciudad FROM experiences GROUP BY ciudad;
            `
        );
        const validateCity = citys.map((citys) => {
            return citys.city;
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
        }

        if (price > 0 && price <= 50) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio BETWEEN 0 AND 50;
                `
            );
        } else if (price > 50 && price <= 100) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio BETWEEN 51 AND 100;
                `
            );
        } else if (price > 100 && price <= 200) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio BETWEEN 101 AND 200;
                `
            );
        } else if (price > 200) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} precio > 200;
                `
            );
        }
        if (city) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} ciudad LIKE ? ;
                `,
                [`%${city}%`]
            );
        }
        if (category) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} categorias LIKE ? ;
                `,
                [`%${category}%`]
            );
        }
        if (disp === 1) {
            [result] = await connection.query(
                `
                 ${sqlExperience} ${separador} disp LIKE ? ;
                 `,
                [`%${disp}%`]
            );
        }
        if ((dStart, dEnd)) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} fecha_inicio >= '${dStart}' AND fecha_fin <= '${dEnd}'
                `,
                [`${finicio},${ffin}`]
            );
        }
        console.log(finicio, ffin);

        if (
            !search &&
            !city &&
            !category &&
            !disp &&
            !price &&
            !finicio &&
            !ffin
        ) {
            [result] = await connection.query(
                `
                 ${sqlExperience} 
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
module.exports = getAllExperiences;
