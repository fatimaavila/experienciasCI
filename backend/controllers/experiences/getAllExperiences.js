const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');
const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();
        const {
            search,
            city,
            precio,
            category,
            disp,
            fecha_inicio,
            fecha_fin,
            order,
        } = req.query;

        let result;
        let sqlExperience = 'SELECT * FROM experiences';
        let separador = 'WHERE';

        
        if (search) {
            sqlExperience = `${sqlExperience} ${separador} nombre LIKE '%${search}%'`
            await connection.query(sqlExperience);
            separador = 'AND';
        }
        
        if (precio && precio > 0 && precio <= 50) {
            
            sqlExperience = `${sqlExperience} ${separador} precio BETWEEN 0 AND 50;`;
            await connection.query(sqlExperience);
            separador = 'AND';
            console.log(sqlExperience);

        } else if (precio && precio > 50 && precio <= 100) {

            sqlExperience = `${sqlExperience} ${separador} precio BETWEEN 51 AND 100;`
            [result] = await connection.query(sqlExperience);
            separador = 'AND';

        } else if (precio && precio > 100 && precio <= 200) {

            sqlExperience = `${sqlExperience} ${separador} precio BETWEEN 101 AND 200`
            [result] = await connection.query(sqlExperience);
            separador = 'AND';

        } else if (precio && precio > 200) {

            sqlExperience = `${sqlExperience} ${separador} precio > 200`
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
    
            if(cityFilter) {
                cityFilter = city;
            } else {
                const errorCity = new Error('No existe ninguna experiencia en esa ciudad');
                errorCity.httpStatus = 404;
                throw errorCity;
            }

            sqlExperience = `${sqlExperience} ${separador} ciudad = ? ;`
            [result] = await connection.query(sqlExperience,[cityFilter]);
            separador = 'AND';

        }
        if (category) {

            const [categories] = await connection.query(
                `
                SELECT categorias FROM experiences GROUP BY categorias;
                `
            );
            const validateCategory = categories.map((category) => {
                return category.categorias;
            });
    
            let categoryFilter = validateCategory.includes(category);
    
            if(categoryFilter) {
                categoryFilter = category;
            } else {
                const errorCategory = new Error('No existe ninguna experiencia de esa categoria');
                errorCategory.httpStatus = 404;
                throw errorCategory;
            }

            sqlExperience = `${sqlExperience} ${separador} categorias = ? ;`
            [result] = await connection.query(sqlExperience,[category]);
            separador = 'AND';

        }

        // if (disp) {
        //     [result] = await connection.query(
        //         `
        //          ${sqlExperience} ${separador} disp LIKE ? ;
        //          `,
        //         [`%${disp}%`]
        //     );
        // }
        /*    if (fecha_inicio > 0 && fecha_fin > 0) {
            [result] = await connection.query(
                `
                ${sqlExperience} ${separador} fecha_inicio >= '${dStart}' AND fecha_fin <= '${dEnd}'
                `,
                [`${finicio},${ffin}`]
            );
        }
        console.log(finicio, ffin);*/

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

        // if(order) {

        // }

        res.send({
            status: 'ok',
            data: sqlExperience[0],
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};
module.exports = getAllExperiences;
