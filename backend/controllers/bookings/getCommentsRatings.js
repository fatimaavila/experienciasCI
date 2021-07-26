const getDB = require('../../bbdd/db');

const getCommentsRatings = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp } = req.params;
        const [booking] = await connection.query(
            `SELECT comentario , valoracion , e.id , u.id , u.username , fecha_compra FROM bookings b
            inner join experiences e  ON b.id_experience = e.id 
            inner join users u ON b.id_user = u.id 
            where e.id=?;         
            `,
            [idExp]
        );
        console.log(booking);

        res.send({
            status: 'ok',
            data: {
                comentarios: [...booking],
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getCommentsRatings;
