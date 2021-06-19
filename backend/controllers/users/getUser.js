const getDB = require('../../bbdd/db');

const getUser = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idUser } = req.params;

        const [user] = await connection.query(
            `SELECT id, username, email, avatar, rol FROM users WHERE id = ?;`,
            [idUser]
        );

        const userInfo = {
            username: user[0].username,
            avatar: user[0].avatar,
        };

        if (
            user[0].id === req.userAuth.idUser ||
            req.userAuth.rol === 'admin'
        ) {
            userInfo.email = user[0].email;
            userInfo.rol = user[0].rol;
        }

        res.send({
            status: 'ok',
            data: userInfo,
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = getUser;
