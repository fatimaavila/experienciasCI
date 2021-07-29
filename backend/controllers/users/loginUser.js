'use strict';

const getDB = require('../../bbdd/db.js');
const jwt = require('jsonwebtoken');

let connection;

const loginUser = async (req, res, next) => {
    try {
        connection = await getDB();

        const { email, username, password } = req.body;
        if ((!email && !username) || !password) {
            const error = new Error('Debes rellenar tu usuario');
            error.httpStatus = 400;
            throw error;
        }

        const [userEmail] = await connection.query(
            `
            SELECT id, rol FROM users WHERE email = ? AND pwd = SHA2(?,512);
        `,
            [email, password]
        );

        const [userName] = await connection.query(
            `    
            SELECT id, rol FROM users WHERE username = ? AND pwd = SHA2(?,512);
        `,
            [username, password]
        );

        console.log(userEmail);

        if (userEmail.length < 1 && userName.length < 1) {
            const error = new Error('Usuario/Email o contraseña incorrectos');
            error.httpStatus = 401;
            throw error;
        }

        let tokenInfo;
        const now = new Date().getTime();

        if (userName[0]) {
            tokenInfo = {
                idUser: userName[0].id,
                rol: userName[0].rol,
                expired: now,
            };
        } else if (userEmail[0]) {
            tokenInfo = {
                idUser: userEmail[0].id,
                rol: userEmail[0].rol,
                expired: now,
            };
        }

        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '120000',
        });

        res.status(200).send({
            data: {
                username,
                email,
                token,
            },
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = loginUser;
