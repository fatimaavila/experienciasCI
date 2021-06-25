const getDB = require('../../bbdd/db');
const { formatDate, priceQuery } = require('../../helpers');
const getAllExperiences = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        let {
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
            sqlExperience = `${sqlExperience} ${separador} nombre LIKE '%${search}%'`;
            // console.log(sqlExperience);
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }
        
        if (price) {

            const priceCase = await priceQuery(price)
            sqlExperience = `${sqlExperience} ${separador} ${priceCase}`;
            [result] = await connection.query(sqlExperience);
            console.log(result);
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

            sqlExperience = `${sqlExperience} ${separador} ciudad = '${cityFilter}'`;
            // console.log(sqlExperience);
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
                const errorCategory = new Error('No existe ninguna experiencia de esa categoria');
                errorCategory.httpStatus = 404;
                throw errorCategory;
            }

            sqlExperience = `${sqlExperience} ${separador} categoria = '${categoryFilter}'`;
            // console.log(sqlExperience);
            [result] = await connection.query(sqlExperience);
            separador = 'AND';

        }

        if (disp) {
            sqlExperience = `${sqlExperience} ${separador} disp = ${disp}`;
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }
        // console.log(sqlExperience);
        
        if ((dateStart, dateEnd)) {
            sqlExperience = `${sqlExperience} ${separador} fecha_inicio >= '${dateStart}' AND fecha_fin <= '${dateEnd}'`;
            [result] = await connection.query(sqlExperience);
            separador = 'AND';
        }

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

        // if(order) {

        // }

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
