'use strict';

const { getDB } = require('../../bbdd/db.js');

let connection;

const loginUser = (req, res, next) => {
    try {
        connection = await getDB();

        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        const [userEmail] = await connection.query(
            `
            SELECT id, rol FROM users WHERE email = ? AND pwd = ?;
        `,
            [email, password]
        );

        const [userName] = await connection.query(
            `
            SELECT id, rol FROM users WHERE username = ? AND pwd = ?;
        `,
            [username, password]
        );

        if (userEmail.length < 1 && userName.length < 1) {
            const error = new Error('Usuario/Email o contraseña incorrectos');
            error.httpStatus = 401;
            throw error;
        }

        const tokenInfo = {
            idUser: userEmail[0].id,
            rol: userEmail[0].rol,
        };

        const token = jwt.sign(tokenInfo, process.env.SECRET);

        res.status(200).send({
            status: 'ok',
            data: {
                token: token,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = loginUser;
