const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const {
            search,
            city,
            price,
            cat,
            disp,
            dateStart,
            dateEnd,
            order,
        } = req.query;

        let result;
        let sqlExperience = 'SELECT * FROM experiences';
        let separador = 'WHERE';

        if (search) {
            console.log(sqlExperience);
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }
        
        if (price) {
            switch (price) {
                case 1:
                    [result] = await connection.query(
                        `
                        ${sqlExperience} ${separador} precio BETWEEN 0 AND 50;
                        `
                    )

                case 2:
                    [result] = await connection.query(
                        `
                            ${sqlExperience} ${separador} precio BETWEEN 51 AND 100;
                            `
                    );
                    return result;

                case 3:
                    [result] = await connection.query(
                        `
                            ${sqlExperience} ${separador} precio BETWEEN 101 AND 200;
                            `
                    );
                    return result;

                case 4:
                    [result] = await connection.query(
                        `
                            ${sqlExperience} ${separador} precio > 200;
                            `
                    );
                    return result;

                default:
                    const error = new Error('Filtro no valido');
                    error.httpStatus = 400;
                    throw error;
            }
        }
        if (city) {
            const [cities] = await connection.query(
                `SELECT ciudad FROM experiences GROUP BY ciudad;`
            );

            const validateCity = cities.map((city) => {
                return city.ciudad;
            });
            if (cityFilter) {
            } else {
                const errorCity = new Error(
                    'No existe ninguna experiencia en esa ciudad'
                );
                errorCity.httpStatus = 404;
                throw errorCity;
            }

            sqlExperience = `${sqlExperience} ${separador} ciudad = '${cityFilter}'`;
            console.log(sqlExperience);
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if (cat) {

            const [categories] = await connection.query(
                `
                SELECT categoria FROM experiences GROUP BY categoria;
                `
            );
            const validateCategory = categories.map((category) => {
                return category.categoria;
            });
    
            let categoryFilter = validateCategory.includes(cat);
    
            if(categoryFilter) {
                categoryFilter = cat;
            } else {
                const errorCategory = new Error(
                    'No existe ninguna experiencia de esa categoria'
                );
                errorCategory.httpStatus = 404;
                throw errorCategory;
            }

            sqlExperience = `${sqlExperience} ${separador} categoria = '${categoryFilter}'`;
            console.log(sqlExperience);
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if (disp) {
            [result] = await connection.query(
                `
                 ${sqlExperience} ${separador} disp = ? ;
                 `,
                [disp]
            );
        }

        if (disp) {
            [result] = await connection.query(`${sqlExperience} ${separador} disp = ${disp}`);
            separador = 'AND';
        }
        console.log(sqlExperience);

        /*    if (fecha_inicio > 0 && fecha_fin > 0) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} fecha_inicio >= ? AND disp = ?;
                `,
                [dStart, disp]
            );
        }

        console.log(dStart, dEnd);

        if (
            !search &&
            !city &&
            !cat &&
            !disp &&
            !price &&
            !dateStart &&
            !dateEnd
        ) {
            [result] = await connection.query(
                `
                 SELECT * FROM experiences;
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
