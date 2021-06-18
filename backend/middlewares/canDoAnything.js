const getDB = require('../bbdd/db');

//Creamos la funcion que nos permita editar y modificar los campos

const canDoAnything = async (req, res, next) => {
    let connection;

    try {
        //Conectamos a la bbdd

        connection = await getDB();

        //Recuperamos los parametros del user '?'

        const { idEntry } = req.params;

        //Comprobamos que el user es el propietario de dichos campos

        const [user] = await connection.query(
            `SELECT idUser FROM users WHERE id = ?;`,
            [idEntry]
        );

        // Si no soy el propietario de la entrada y no soy administrador
        // no puedo editar los campoos.
        if (
            user[0].idUser !== req.userAuth.idUser &&
            req.userAuth.role !== 'admin'
        ) {
            const error = new Error(
                'No tienes permisos para editar esta entrada'
            );
            error.httpStatus = 401;
            throw error;
        }

        next();
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = canDoAnything;
