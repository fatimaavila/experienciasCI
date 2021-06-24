const getDB = require('../../bbdd/db');
const { formatDate } = require('../../helpers');


const newBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { units, dateBooking, totalPrice, idExp } = req.body;
        const { idUser } = req.userAuth;
        const now = new Date();
        const datePurchase = formatDate(now);

        const [newBooking] = await connection.query(
            `
            INSERT INTO bookings ( cantidad, fecha_reserva,fecha_compra, precio_total,  id_user, id_experience)
                VALUES(?, ?, ?, ?, ?, ? );
            `,
            [units, dateBooking, datePurchase, totalPrice, idUser, idExp]
        );

        const { insertId: idBook } = newBooking;
        const [state] = await connection.query(
            `
            SELECT estado FROM bookings WHERE id = ?;
            `,
            [idBook]
        );
        res.send({
            status: 'ok',
            data: {
                id: idBook,
                units,
                dateBooking,
                datePurchase,
                totalPrice,
                idUser,
                idExp,
                ...state[0],
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release;
    }
};

module.exports = newBooking;
