# VAN_Experiences


-   Se trata de una web de catálogo de experiencias dónde los usuarios podrán ver e investigar de las experiencias en cada ciudad para todos los viajeros. 

### Backend

-   Se trata de una API con arquitectura REST creada en Node.js, junto con Mysql y Express.
    Donde se utilizan diversas dependencias como: Joi, Dotenv, Jsonwebtoken, Sendgrid, Date-fns, FS-Extra, Sharp, Uuid, Mysql2 y Express-Fileupload.

### Frontend

- Se creó un catálogo simple basado en una plantilla con HTML5 y JavaScript, para que esta consuma la API del backend que se encuentra en EC2, lo único que requiere es un servidor http para poder probarlo localmente, pero se utiliza el servicio de Amplify para poder consumirlo. 

## Pasos para construirlo en tu 🧑🏻‍💻

1. Crea una instancia de EC2 para la aplicación
2. Crea una instancia RDS de MySQL que tenga conexión a la EC2 del paso 1, para que se puedan "ver" una con la otra dentro del ambiente AWS.
3. Sigue los pasos de [ejecución del backend](https://github.com/fatimaavila/experienciasCI#ejecuci%C3%B3n-del-backend) pero antes asegúrate de configurar las credenciales para la conexión de la base de datos del paso 2, esto lo chequeas en[en la configuración inicial](https://github.com/fatimaavila/experienciasCI#configuraci%C3%B3n-inicial) 👇🏻
4. Si todo está correcto deberías de tener tu base de datos poblada, puedes probar hacer consultas en un cliente de sql, con la configuración correcta.

### Frontend

Creado en React.js, hemos usado algunas dependencias como:

-   Styled-components: Como base para la creación y estilado de la aplicación.
-   Material-ui: Para el rating de las experiencias.
-   Bootstrap: Para la generación de los formularios.
-   React-Datepicker: Para los calendarios.
-   React-Alice-Carousel: Para los sliders.
-   Ademas un conjunto añadido para gestión de la aplicación: Axios,React-Router,Query-String,Date-Fns,JWT-Decode,UUID.

## Configuración inicial

-   Disponen de un documento ".env.example" en la carpeta de backend y frontend, el cual debe ser rellenado en los campos libres y guardado en la raíz del directorio en cuestión como ".env"

*   Según los datos propios de Mysql para el backend.
*   Para el front solo debemos cambiar el nombre a ".env" si hemos configurado el puerto recomendado, en caso contrario cambiar el puerto.

-   Las variables SG_API_KEY y SENDGRID_FROM indicar los facilitados por http://sendgrid.com para tu
    propio usuario registrado.
-   La variable SECRET debe ser un string alfanumerico aleatorio.

### Ejecución del Backend

-   Para iniciar el backend, nos situaremos en la raíz de backend y ejecutaremos en un terminal los siguientes comandos:

-   [npm install] Instala todas las dependencias necesarias para el correcto funcionamiento del sitio.
-   [npm run sql] Ejecuta el script que crea la base de datos, las tablas, y los datos necesarios.
-   [npm run dev] Ejecuta el servidor para poder trabajar, http://localhost:PORT con el fin de que cors funcione correctamente recomendamos el puerto: 8080

### Ejecución del Frontend

-   Para iniciar el frontend necesitamos tener como gestor de dependencias "yarn", nos situaremos en la raiz de frontend y ejecutaremos en un terminal los siguientes comandos:

-   [yarn] Para instalar todo lo necesario para poder probar la aplicación.
-   [yarn start] Ejecuta el servidor para poder trabajar, http://localhost:PORT con el fin de que cors funcione correctamente recomendamos el puerto: 3000

*   Usuarios admin: 'admin1', 'admin2', 'admin3'. Password: 123456 o lo que configuren en su ".env"
*   Usuarios regular: 'vmcauliffe3', 'mdwyer4'. Password: 12345678 o lo que configuren en su ".env"

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
