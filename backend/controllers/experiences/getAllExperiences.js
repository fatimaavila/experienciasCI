const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const { search, city, price, category, disp, dStart, dEnd } = req.query;
        let result;
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

        if (price) {
            switch (price) {
                case 1:
                    [result] = await connection.query(
                        `
                        ${sqlExperience} ${separador} precio BETWEEN 0 AND 50;
                        `
                    );
                    return result;
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

            let cityFilter = validateCity.includes(city);

            if (cityFilter) {
                cityFilter = city;
            } else {
                const errorCity = new Error(
                    'No existe ninguna experiencia en esa ciudad'
                );
                errorCity.httpStatus = 404;
                throw errorCity;
            }

            sqlExperience = `${sqlExperience} ${separador} ciudad = ? ;`;
            console.log(sqlExperience);
            [result] = await connection.query(sqlExperience, [cityFilter]);
            separador = 'AND';
        }

        const [categories] = await connection.query(
            `SELECT categorias FROM experiences GROUP BY categorias;`
        );
        if (category) {
            const validateCategory = categories.map((category) => {
                return category.categorias;
            });

            let categoryFilter = validateCategory.includes(category);

            if (categoryFilter) {
                categoryFilter = category;
            } else {
                const errorCategory = new Error(
                    'No existe ninguna experiencia de esa categoria'
                );
                errorCategory.httpStatus = 404;
                throw errorCategory;
            }

            sqlExperience = `${sqlExperience} ${separador} categorias = ?`;
            console.log(sqlExperience);
            [result] = await connection.query(sqlExperience, [category]);
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

        if ((dStart, disp)) {
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
            !category &&
            !disp &&
            !price &&
            !dStart &&
            !dEnd
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
