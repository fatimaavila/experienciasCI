# TATICU VIAJES 🐶


-   Se trata de una web que muestra un catálogo de experiencias dónde los usuarios podrán ver e investigar las experiencias en cada ciudad y poder contactar al proveedor. Se implementa un API con las experiencias para que se pueda compartir con cualquier agencia de viajes y que por medio del API ellos puedan crear su propio sitio y pueda re-vender las experiencias.

### Backend

-   Se trata de una API con arquitectura REST creada en Node.js, junto con Mysql y Express.
    Donde se utilizan diversas dependencias como: Joi, Dotenv, Date-fns, FS-Extra,  Uuid, Mysql2  entre otras.

### Frontend

- Se creó un catálogo basado en una plantilla con HTML5 y JavaScript, para que esta consuma la API del backend que se encuentra en EC2, lo único que requiere es un servidor http para poder probarlo localmente, pero se utiliza el servicio de Amplify de AWS para hosting. Toma en cuenta que si utilizas un hosting con  https, tienes que crear un API Gateway, mas detalles abajo 👇🏻

## Pasos para construirlo en tu 🧑🏻‍💻

Requisitos: Necesitas una instancia que pueda correr node y npm, ya que el backend está desarrollado en Express, esta puede ser :
- Tu máquina local
- Una EC2 en la nube (de preferencia Ubuntu)
- O un contenedor Docker 🐳

Además requieres de una base de datos MySQL 🐬, esta puede ser:

- Una base de datos local llamada VAN_Experience
- Una instancia RDS en AWS (compatible con MySQL)
- O un MySQL instalado en tu EC2 - Debes crear una base de datos con el nombre VAN_Experience

## A continuación los pasos utilizando los servicios de AWS 📦

1. Crea una instancia de AWS-EC2 para la aplicación
2. Crea una instancia AWS-RDS de MySQL que tenga conexión a la EC2 del paso 1, para que se puedan "ver" una con la otra dentro del ambiente AWS.
3. Asegurate que tu AWS-EC2 tenga instalado node y todos sus paquetes estén actualizados.
4. Clonar este repositorio 🐱
5. Sigue los pasos de [la configuración inicial](https://github.com/fatimaavila/experienciasCI#configuraci%C3%B3n-inicial) 👇🏻
6. Sigue los pasos de [ejecución del backend](https://github.com/fatimaavila/experienciasCI#ejecuci%C3%B3n-del-backend) pero antes asegúrate de configurar las credenciales para la conexión de la base de datos del paso 2. Mira ejemplo de archivo de configuración en la imagen [aquí.](https://github.com/fatimaavila/experienciasCI/tree/master#ejemplo-del-archivo-env)
7. Si todo está correcto deberías de tener tu base de datos poblada y tus servidores escuchando en algun puerto. Puedes probar hacer consultas en un cliente de sql, con la configuración correcta conectándose a la base de datos o haciendo peticiones al backend por ejemplo http://<ip>:<puerto>/experiences
8. Configura el frontend, esto puede ser tan sencillo como hacerlo localmente con `python3 -m http.server` en la carpeta `webapp` o puedes subirlo a un AWS-Amplify.
   - 8.1 Para configurar en AWS-Amplify seguiremos los siguientes pasos:
      - 8.1.1 Utilizarás la opción de hosting a webapp
      - 8.1.2 Lo conectarás a Github
      - 8.1.3 Colocarás el repositorio que clonaste y asegurate que solo quieres hostear la carpeta `webapp` como en la imagen
      - 8.1.4 Permiterle a AWS acceder a los cambios (imagen 2)
      - 8.1.5 por último darle save and deploy - Despues de unos segundos la URL debería mostrar la página inicial
    
    *Imagen 1*

   <img width="805" alt="image" src="https://github.com/fatimaavila/experienciasCI/assets/69205813/caf74bcf-2906-460c-b97b-4b7488d3ec10">

   *Imagen 2*

   <img width="605" alt="image" src="https://github.com/fatimaavila/experienciasCI/assets/69205813/b65f859c-d8c3-496a-91b7-598ea8d9c5a0">



## Configuración inicial


- Ubicate en la carpeta de `backend` dentro de `experienciasCI`
- Dispones de un documento ".env.example" en la carpeta de backend, está escondido, pon el comando `cp .env.example .env` así no tocas el ejemplo
- El cual debe ser rellenado en los campos libres y guardado en la raíz del directorio en cuestión como ".env"
- Según los datos propios de Mysql para el backend - *mira el ejemplo que ya funciona para mi instancia AWS-RDS.*



### Ejemplo del archivo env 

  ![image](https://github.com/fatimaavila/experienciasCI/assets/69205813/2975f603-db10-4da8-9a29-99014e1c6c88)


### Ejecución del Backend

-   Para iniciar el backend, nos situaremos en la raíz de backend y ejecutaremos en un terminal los siguientes comandos:

-   `npm install` Instala todas las dependencias necesarias para el correcto funcionamiento del sitio.
-   `npm run sql` Ejecuta el script que crea la base de datos, las tablas, y los datos necesarios.
-   `npm run dev` Ejecuta el servidor para poder trabajar, http://localhost:PORT con el fin de que cors funcione correctamente recomendamos el puerto: 8080

### Ejecución del Frontend

Para el frontend solo se requiere un servidor http, puede ser tan sencillo como un servidor web local,  toma en cuenta que si tu sitio web está con SSL, deberás hacer un API Gateway -  tu aplicación no funcionara porque el browser bloqueara el mixed content, por lo que tienes que usar un proxy. Lo puedes crear en AWS con el servicio del AWS-API_gateway, [aquí una guía de como hacerlo 📝.](https://keliris.dev/articles/aws-apigw-https-proxy)  Deberás cambiar el archivo config.js del frontend a la url que te asigne el AWS-API_gateway.
   



