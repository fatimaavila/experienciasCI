const getDB = require('../../bbdd/db');
const { formatDate, validate } = require('../../helpers');
//const { newEntrySchema } = require('../../schemas');

const newBooking = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        // Validamos los datos.
        //await validate(newEntrySchema, req.body);

        const { units, dateBooking, totalPrice, idExp } = req.body;
        const { idUser } = req.userAuth;
        const now = new Date();
        state = 1;
        const datePurchase = formatDate(now);

        const [newBooking] = await connection.query(
            `
            INSERT INTO bookings ( cantidad, fecha_reserva,fecha_compra, precio_total,  id_user, id_experience)
                VALUES(?, ?, ?, ?, ?, ? );
            `,
            [units, dateBooking, datePurchase, totalPrice, idUser, idExp]
        );

        const { insertId: idBook } = newBooking;

        res.send({
            status: 'ok',
            data: {
                id: idBook,
                units,
                dateBooking,
                datePurchase,
                totalPrice,
                state,
                idUser,
                idExp,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release;
    }
};

module.exports = newBooking;
