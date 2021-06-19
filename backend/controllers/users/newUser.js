'use strict';

const getDB = require('../../bbdd/db');
const {
    //validate,
    generateRandomString,
    sendMail,
    formatDate,
    savePhoto,
} = require('../../helpers');
//const { newUserSchema } = require('../../schemas');
let connection;

const newUser = async (req, res, next) => {
    try {
        connection = await getDB();
        // await validate(newUserSchema, req.body);
        const {
            username,
            email,
            password,
            dni,
            cp,
            address,
            last,
            name,
            bio,
            phone,
        } = req.body;

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

        const [user] = await connection.query(
            `SELECT id FROM users WHERE email = ? OR username = ?;`,
            [email, username]
        );

        if (user.length > 0) {
            const error = new Error(
                'Ya existe un usuario con ese email/usuario en la base de datos'
            );
            error.httpStatus = 409;
            throw error;
        }

        const registrationCode = generateRandomString(40);

        const emailBody = `
            Te acabas de registrar en Van Experiences.
            Pulsa en este link para verificar tu cuenta: ${process.env.PUBLIC_HOST}/users/validate/${registrationCode}
        `;

        await sendMail({
            to: email,
            subject: 'Activa tu cuenta en Van Experiences',
            body: emailBody,
        });
        console.log(req.files);
        if (req.files && req.files.avatar) {
            const avatarName = await savePhoto(req.files.avatar);

            await connection.query(
                `INSERT INTO users 
                ( username, pwd, email, dni, direccion, bio,telefono, nombre, apellidos, cp, resgistrationCode, createdAt, avatar)
                 VALUES 
                 (?, SHA2(?, 512), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [
                    username,
                    password,
                    email,
                    dni,
                    address,
                    bio,
                    phone,
                    name,
                    last,
                    cp,
                    registrationCode,
                    formatDate(new Date()),
                    avatarName,
                ]
            );
        } else {
            await connection.query(
                `INSERT INTO users 
                ( username, pwd, email, dni, direccion, bio,telefono, nombre, apellidos, cp, resgistrationCode, createdAt)
                 VALUES 
                 (?, SHA2(?, 512), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [
                    username,
                    password,
                    email,
                    dni,
                    address,
                    bio,
                    phone,
                    name,
                    last,
                    cp,
                    registrationCode,
                    formatDate(new Date()),
                ]
            );
        }

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

module.exports = newUser;
