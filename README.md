# VAN_Experiences

-   Se trata de una web de gestión y venta de experiencias dónde los usuarios podrán adquirir paquetes de distintos tipos y en distintas localizaciones.

### Backend

-   Se trata de una API con arquitectura REST creada en Node.js, junto con Mysql y Express.
    donde se utilizan diversas dependencias como: Joi, Dotenv, Jsonwebtoken, Sendgrid, Date-fns, FS-Extra, Sharp, Uuid, Mysql2 y Express-Fileupload.

### Frontend

-   Creado en React.js....

## Configuración inicial

-   Disponen de un documento ".env.example" el cual debe ser rellenado en los campos libres,
    segun los datos propios de Mysql. Y guardado en la raiz del bakend como ".env"

### Ejecución del Backend

-   Para iniciar el bakend, nos situaremos en la raiz de backend y ejecutaremos en un terminal los siguientes comandos:

    -   [npm install] Instala todas las dependencias necesarias para el correcto funcionamiento del sitio.
    -   [npm run sql] Ejecuta el script que crea la base de datos, las tablas, y los datos necesarios.
    -   [npm run dev] Ejecuta el servidor para poder trabajar, http://localhost:PORT

### Ejecución del Frontend

-   Para iniciar el frontend, nos situaremos en la raiz de frondtend y ejecutaremos en un terminal los siguientes comandos:

    -   [xxxxx] xxxxxxxxxx.
    -   [xxxxx] xxxxxxxxxx.
    -   [xxxxx] xxxxxxxxxx.

## Composición del Backend

### Tabla Experiencias.

-   Cada experiencia tiene las siguientes entradas :

    -   Descripción
    -   Nombre
    -   Ciudad
    -   Categorias
    -   Fecha de inicio de la actidad
    -   Fecha final de la actividad
    -   Participantes de la actividad
    -   Precio
    -   Disponibilidad

### Tabla Usuarios.

-   Cada usuario tiene las siguientes entradas :

    -   Nombre de usuario
    -   Contraseña
    -   Rol
    -   Email
    -   DNI
    -   CCC (Datos bancarios)
    -   Dirección
    -   Telefono
    -   Nombre
    -   Apellidos
    -   CP
    -   Valoracción
    -   Foto de usuario

### Tabla Fotos.

-   Cada experiencia puede contener distintas fotos y tiene las siguientes entradas :

    -   Texto alternativo de la foto
    -   URL
    -   FK Id de la experiencia

### Tabla Reservas.

-   Cada usuario puede realizar reservas de experiencias y las reservas tienen las siguientes entradas :

    -   Cantidad
    -   Fecha de reserva
    -   Fecha de compra
    -   Precio total
    -   Estado
    -   Valoración
    -   Comentario
    -   Fecha del comentario
    -   FK Id del usuario
    -   FK Id de la experiencia

## Endpoints

### Endpoints experiencias e imágenes.

-   **GET** - [/experiences] - Obtener la lista de experiencias.
    -   search = Lo que escriba el usuario en el buscador
    -   ciudad = La ciudad seleccionada
    -   precio = Precio seleccionados por el usuario
    -   disponibilidad = Si la experiencia esta disponible
-   **GET** - [/experiences/:idExp] - Obtener los datos de una experiencia concreta

-   **PUT** - [/experiences/:idExp] - Editar la experiencia

-   **DELETE** - [/experiences/:idExp] - Elimina la experiencia

-   **DELETE** - [/experiences/:idExp/photo] - Elimina la img

-   **POST** - [/experiences] - Crea una nueva esperiencia

-   **POST** - [/experiences/:idExp/photo] - Añade una nueva img

### Endpoints del usuario.

-   **GET** - [/users/:idUser] - Obtener un usuario.

-   **GET** - [/users/validate/:registrationCode] - Valida el alta de un usuario

-   **POST** - [/users] - Crear un usuario

-   **POST** - [/users/login] - Logea el usuario restornando un tokent.

-   **POST** - [/users/:idUser/avatar] - Crear el avatar del usuario.

-   **DELETE** - [/users/:idUser] - Elimina la cuenta de un usuario.

-   **DELETE** - [/users/:idUser/avatar] - Eliminar el avatar del usuario.

-   **PUT** - [/users/:idUser] - Editar los datos de un usuario

-   **PUT** - [/users/:idUser/pwd] - Editar la contraseña de un usuario

-   **PUT** - [/users/recover/pwd] - Recuperar contraseña de un usuario

-   **PUT** - [/users/reset/pwd] - Modifica la contraseña de un usuario

### Endpoints de reservas.

-   **GET** - [/bookings] - Obtener todas las reservas

-   **GET** - [/bookings/:idBooking] - Obtener las reservas de una experiencia.

-   **POST** - [/bookings] - Crear una nueva reserva.

-   **PUT** - [/bookings/:idBooking/coments] - Crear un comentario de la reserva.

-   **PUT** - [/bookings/:idBooking/rating] - Agregar una Valoración sobre la reserva.

-   **DELETE** - [/bookings/:idBooking] - Cancelar una reserva.

## Composición del Frontend

### XXXXXXX
