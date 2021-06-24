const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

const editExperience = async (req, res, next) => {
    let connection;
    let sqlExperience = 'SELECT * FROM experiences';
    try {
        connection = await getDB();

        const { idExp } = req.params;

        if(req.userAuth.rol !== 'admin') {
            const error = new Error('No tienes permisos para eliminar fotos');
            error.httpStatus = 401;
            throw error;
        }

        let {
            description,
            name,
            city,
            price,
            category,
            participants,
            disp,
            sDate,
            fDate,
        } = req.body;

        const [experience] = await connection.query(
            `
            ${sqlExperience} WHERE id = ?;
            `,
            [idExp]
        );

        description = description || experience[0].descripcion;
        name = name || experience[0].nombre;
        city = city || experience[0].ciudad;
        price = price || experience[0].precio;
        category = category || experience[0].categoria;
        participants = participants || experience[0].num_participantes;
        disp = disp || experience[0].disp;
        sDate = sDate || experience[0].fecha_inicio;
        fDate = fDate || experience[0].fecha_fin;

        const now = new Date();
        disp = 1;
        await connection.query(
            `UPDATE experiences SET descripcion = ?, nombre = ?,ciudad = ?,
             precio = ?, categoria = ?, num_participantes = ?, disp = ?,
             fecha_inicio = ?, fecha_fin = ?, modifiedAt = ? WHERE id = ?;`,
            [
                description,
                name,
                city,
                price,
                category,
                participants,
                disp,
                sDate,
                fDate,
                formatDate(now),
                idExp,
            ]
        );

        res.send({
            status: 'ok',
            data: {
                id: idExp,
                description,
                name,
                city,
                price,
                category,
                participants,
                disp,
                sDate,
                fDate,
                modifiedAt: now,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = editExperience;
