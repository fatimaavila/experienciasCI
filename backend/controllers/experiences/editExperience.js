const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');

const editExperience = async (req, res, next) => {
    let connection = req.connection;
    let sqlExperience = 'SELECT * FROM experiences';
    try {
        connection = await getDB();

        const { id } = req.params;
        let {
            descripcion,
            nombre,
            ciudad,
            precio,
            categorias,
            num_participantes,
            disp,
            fecha_inicio,
            fecha_fin,
        } = req.body;

        const [experiencia] = await connection.query(
            `
            ${sqlExperience} WHERE id = ?;
            `,
            [`%${id}%`]
        );

        descripcion = descripcion || experiencia[0].descripcion;
        nombre = nombre || experiencia[0].nombre;
        ciudad = ciudad || experiencia[0].ciudad;
        precio = precio || experiencia[0].precio;
        categorias = categorias || experiencia[0].categorias;
        num_participantes =
            num_participantes || experiencia[0].num_participantes;
        disp = disp || experiencia[0].disp;
        fecha_inicio = fecha_inicio || experiencia[0].fecha_inicio;
        fecha_fin = fecha_fin || experiencia[0].fecha_fin;

        const now = new Date();

        await connection.query(
            `UPDATE experiencias SET descripcion = ?, nombre = ?,ciudad = ?,
             precio = ?, categorias = ?, num_participantes = ?, disp = ?,
             fecha_inicio = ?, fecha_fin = ?, modifiedAt = ? WHERE id = ?;`,
            [
                description,
                nombre,
                ciudad,
                precio,
                categorias,
                num_participantes,
                disp,
                fecha_inicio,
                fecha_fin,
                formatDate(now),
                id,
            ]
        );

        res.send({
            status: 'ok',
            data: {
                id: id,
                descripcion,
                nombre,
                precio,
                categorias,
                num_participantes,
                disp,
                fecha_inicio,
                fecha_fin,
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
