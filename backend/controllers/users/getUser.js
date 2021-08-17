const getDB = require('../../bbdd/db');
const { PUBLIC_HOST, UPLOADS } = process.env;

const getUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.params;

        const [user] = await connection.query(
            `SELECT id, username, email, dni, nombre, apellidos, direccion, telefono, cp,bio, ccc, avatar, rol FROM users WHERE id = ?;`,
            [idUser]
        );

        const userInfo = {
            username: user[0].username,
            avatar: user[0].avatar
                ? `${PUBLIC_HOST}${UPLOADS}${user[0].avatar}`
                : null,
        };
        console.log(user[0].id, req.userAuth.idUser);
        if (
            user[0].id === req.userAuth.idUser ||
            req.userAuth.rol === 'admin'
        ) {
            userInfo.email = user[0].email;
            userInfo.rol = user[0].rol;
            userInfo.email = user[0].email;
            userInfo.username = user[0].username;
            userInfo.dni = user[0].dni;
            userInfo.nombre = user[0].nombre;
            userInfo.apellidos = user[0].apellidos;
            userInfo.direccion = user[0].direccion;
            userInfo.telefono = user[0].telefono;
            userInfo.cp = user[0].cp;
            userInfo.bio = user[0].bio;
            userInfo.ccc = user[0].ccc;
        }

        res.send({
            status: 200,
            data: userInfo,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getUser;
