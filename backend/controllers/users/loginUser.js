'use strict';

const getDB = require('../../bbdd/db.js');
const jwt = require('jsonwebtoken');

let connection;

const loginUser = async (req, res, next) => {
    try {
        connection = await getDB();

        const { email, username, password } = req.body;
        if ((!email && !username) || !password) {
            const error = new Error('Obligatorio rellenar todos los campos');
            error.httpStatus = 400;
            throw error;
        }

        const [userEmail] = await connection.query(
            `
            SELECT id, rol, active FROM users WHERE email = ? AND pwd = SHA2(?,512);
        `,
            [email, password]
        );

        const [userName] = await connection.query(
            `    
            SELECT id, rol, active FROM users WHERE username = ? AND pwd = SHA2(?,512);
        `,
            [username, password]
        );

        if (userEmail.length < 1 && userName.length < 1) {
            
            const error = new Error('Usuario/Email o contraseña incorrectos');
            error.httpStatus = 401;
            throw error;
        }
         // por versiones error if (userEmail[0]?.active === 0 || userName[0]?.active === 0) {
        if ((userEmail[0] && userEmail[0].active === 0) || (userName[0] && userName[0].active === 0)) {
            const error = new Error('Usuario pendiente de validar');
            error.httpStatus = 402;
            throw error;
        }

        let tokenInfo;

        if (userName[0]) {
            tokenInfo = {
                idUser: userName[0].id,
                rol: userName[0].rol,
            };
        } else if (userEmail[0]) {
            tokenInfo = {
                idUser: userEmail[0].id,
                rol: userEmail[0].rol,
            };
        }

        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '1d',
        });

        res.send({
            status: 200,
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
