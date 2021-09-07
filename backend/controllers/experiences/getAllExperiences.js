const { PUBLIC_HOST, UPLOADS } = process.env;

const getDB = require('../../bbdd/db');
const { priceQuery } = require('../../helpers');
const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const {
            searchExp,
            city,
            price,
            cat,
            disp,
            dateStart,
            dateEnd,
            order,
            orderDir,
        } = req.query;

        let result;
        let sqlExperience = 'SELECT * FROM experiences';
        let separador = 'WHERE';

        if (searchExp) {
            sqlExperience = `${sqlExperience} ${separador} nombre LIKE '%${searchExp}%'`;

            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if (price) {
            if (
                price !== '0-50' &&
                price !== '50-100' &&
                price !== '100-150' &&
                price !== '150-200' &&
                price !== '200-'
            ) {
                const errorPrice = new Error(
                    'El valor del parámetro price no es válido'
                );
                errorPrice.httpStatus = 404;
                throw errorPrice;
            }

            const priceCase = await priceQuery(price);
            sqlExperience = `${sqlExperience} ${separador} ${priceCase}`;
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if (city) {
            const [cities] = await connection.query(
                `
                SELECT ciudad FROM experiences GROUP BY ciudad;
                `
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

            sqlExperience = `${sqlExperience} ${separador} ciudad = '${cityFilter}'`;

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

            if (categoryFilter) {
                categoryFilter = cat;
            } else {
                const errorCategory = new Error(
                    'No existe ninguna experiencia de esa categoria'
                );
                errorCategory.httpStatus = 404;
                throw errorCategory;
            }

            sqlExperience = `${sqlExperience} ${separador} categoria = '${categoryFilter}'`;

            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if (disp) {
            if (disp !== '1' && disp !== '0') {
                const errorDisp = new Error(
                    'El parámetro disp sólo puede tener el valor 0 o el valor 1'
                );
                errorDisp.httpStatus = 404;
                throw errorDisp;
            }

            sqlExperience = `${sqlExperience} ${separador} disp = ${disp}`;
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if ((dateStart, dateEnd)) {
            sqlExperience = `${sqlExperience} ${separador} fecha_inicio >= '${dateStart}' AND fecha_fin <= '${dateEnd}'`;
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

        if (order && orderDir) {
            const validateOrder = ['precio', 'nombre'];
            const orderDirection = ['ASC', 'DESC'];

            let orderFilter = validateOrder.includes(order);
            let directionFilter = orderDirection.includes(orderDir);

            if (orderFilter) {
                orderFilter = order;
            } else {
                const errorOrder = new Error(
                    'No está permitido ordenar por este parámetro'
                );
                errorOrder.httpStatus = 404;
                throw errorOrder;
            }

            if (directionFilter) {
                directionFilter = order;
            } else {
                const errorDirection = new Error(
                    'No está permitido ordenar en esa dirección'
                );
                errorDirection.httpStatus = 404;
                throw errorDirection;
            }

            sqlExperience = `${sqlExperience} ORDER BY ${order} ${orderDir}`;
            [result] = await connection.query(sqlExperience);
        }

        if (order && !orderDir) {
            const error = new Error('El order debe ir con una dirección');
            error.httpStatus = 404;
            throw error;
        } else if (orderDir && !order) {
            const error = new Error('El orderDir necesita un order');
            error.httpStatus = 404;
            throw error;
        }

        if (
            !searchExp &&
            !city &&
            !cat &&
            !disp &&
            !price &&
            !dateStart &&
            !dateEnd &&
            !order &&
            !orderDir
        ) {
            [result] = await connection.query(
                `
                 SELECT * FROM experiences;
                `
            );
        }

        const experiencesWithPhotos = await Promise.all(
            result.map(async (experience) => {
                const [photos] = await connection.query(
                    `SELECT * FROM photos WHERE id_experience=?`,
                    [experience.id]
                );
                return {
                    ...experience,
                    photos: photos.map((photo) => ({
                        photo: `${PUBLIC_HOST}${UPLOADS}${photo.url}`,
                        id: photo.id,
                    })),
                };
            })
        );

        res.send({
            status: 200,
            data: experiencesWithPhotos,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};
module.exports = getAllExperiences;
