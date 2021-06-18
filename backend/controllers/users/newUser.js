'use strict';

const { getDB } = require('../bbdd/db.js');

let connection;

const newUser = (req, res, next) => {
    try {
        connection = await getDB();
        const { username, email, password, dni, cp, address, last, name, bio } =
            req.body;

        if (
            !email ||
            !password ||
            !username ||
            !name ||
            !last ||
            !bio ||
            !dni ||
            !cp ||
            !address
        ) {
            const error = new Error('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        // Comprobamos si existe en la base de datos un usuario con ese email.
        const [user] = await connection.query(
            `SELECT id FROM users WHERE email = ?;`,
            [email]
        );
        const [username] = await connection.query(
            `SELECT id FROM users WHERE username = ?;`,
            [username]
        );

        if (user.length > 0) {
            const error = new Error(
                'Ya existe un usuario con ese email en la base de datos'
            );
            error.httpStatus = 409;
            throw error;
        }

        // Creamos un código de registro (de un solo uso).
        const registrationCode = generateRandomString(40);

        // Mensaje que enviaremos al usuario.
        const emailBody = `
            Te acabas de registrar en Van Experiences.
            Pulsa en este link para verificar tu cuenta: ${process.env.PUBLIC_HOST}/users/validate/${registrationCode}
        `;

        // Enviamos el mensaje.
        await sendMail({
            to: email,
            subject: 'Activa tu cuenta en Van Experiences',
            body: emailBody,
        });

        // Guardamos al usuario en la base de datos junto al código de registro.
        await connection.query(
            `INSERT INTO users 
            ( username, pwd, email, dni, direccion, bio, nombre, apellidos, cp, registrationCode)
             VALUES 
             (?, SHA2(?, 512), ?, ?, ?, ?, ?, ?, ?);`,
            [
                username,
                password,
                email,
                dni,
                address,
                bio,
                name,
                last,
                cp,
                registrationCode,
            ]
        );

        res.send({
            status: 'ok',
            message: 'Usuario registrado, comprueba tu email para activarlo',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = { newUser };
