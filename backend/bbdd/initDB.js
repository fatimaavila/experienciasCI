'use strict';
require('dotenv').config();

const getDB = require('./db');

let connection;

const initDB = async () => {
    try {
        connection = await getDB();
        await connection.query('DROP DATABASE IF EXISTS VAN_Experience');
        await connection.query('CREATE DATABASE VAN_Experience;');
        await connection.query('USE VAN_Experience;');
        await connection.query('SET FOREIGN_KEY_CHECKS = 1;');
        await connection.query('DROP TABLE IF EXISTS users;');
        await connection.query('DROP TABLE IF EXISTS experiences;');
        await connection.query('DROP TABLE IF EXISTS bookings;');
        await connection.query('DROP TABLE IF EXISTS photos;');
        await connection.query('SET FOREIGN_KEY_CHECKS = 0;');

        console.log('Tablas eliminadas');

        await connection.query(`
        CREATE TABLE IF NOT EXISTS users(
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(30) NOT NULL UNIQUE,
            pwd VARCHAR(200) NOT NULL,
            rol ENUM('regular', 'admin') NOT NULL,
            email VARCHAR(75) NOT NULL UNIQUE,
            dni VARCHAR(15) UNIQUE,
            ccc VARCHAR(40),
            direccion VARCHAR(50),
            telefono VARCHAR(20) UNIQUE ,
            bio TEXT,
            nombre VARCHAR(30) NOT NULL,
            apellidos VARCHAR(50) NOT NULL,
            cp VARCHAR(20),
            avatar VARCHAR(200),
            registrationCode VARCHAR(100),
            recoverCode VARCHAR(100),
            active BOOLEAN default 0,
            deleted BOOLEAN default 0,
            createdAt DATETIME,
            modifiedAt DATETIME

        );
        `);

        await connection.query(`
        CREATE TABLE IF NOT EXISTS experiences(
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            descripcion TEXT NOT NULL,
            nombre VARCHAR(150) NOT NULL,
            ciudad VARCHAR(50) NOT NULL,
            precio DECIMAL(5, 2) NOT NULL,
            categoria VARCHAR(25) NOT NULL,
            num_participantes INT NOT NULL,
            disp BOOLEAN DEFAULT 1 NOT NULL,
            fecha_inicio DATE NOT NULL,
            fecha_fin DATE NOT NULL,
            modifiedAt DATETIME
        );
        `);

        await connection.query(`
        CREATE TABLE IF NOT EXISTS bookings(
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            cantidad TINYINT NOT NULL,
            fecha_reserva DATE NOT NULL,
            fecha_compra DATETIME,
            precio_total DECIMAL(5, 2) NOT NULL,
            estado BOOLEAN DEFAULT 1 NOT NULL,
            valoracion TINYINT,
            comentario TEXT,
            id_user INT UNSIGNED,
                FOREIGN KEY (id_user) REFERENCES users (id),
            id_experience INT UNSIGNED,
                FOREIGN KEY (id_experience) REFERENCES experiences (id) ON DELETE CASCADE ON UPDATE CASCADE
        );
        `);

        await connection.query(`
        CREATE TABLE IF NOT EXISTS photos(
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            alt VARCHAR(100),
            url VARCHAR(200),
            id_experience INT UNSIGNED,
                FOREIGN KEY (id_experience) REFERENCES experiences (id) ON DELETE CASCADE ON UPDATE CASCADE 
        );
        `);

        console.log('Tablas creadas');

        await connection.query(`
        INSERT INTO users (id, username, pwd,rol, email,  ccc, direccion, telefono, bio, nombre, apellidos, cp, active) VALUES 
        (1, 'hatashi199', SHA2("${process.env.ADMIN_PASSWORD}", 512),'admin',  'alejandromf_199@hotmail.com',  'DE64 7032 9119 6174 2043 34', '71 Doe Crossing Avenue', '9213721676', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Alejandro', 'Mariño', null, true),
        (2, 'vaszm', SHA2("${process.env.ADMIN_PASSWORD}", 512),'admin',  'vaszm1996@gmail.com',  'LI23 7479 62SC RO3M FPZW M', '52 Raven Park', '1647303010', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Vicente', 'Aleixandre', '3246', true),
        (3, 'nachors', SHA2("${process.env.ADMIN_PASSWORD}", 512),'admin', 'nachorsanz@gmail.com',  'IE46 BCHL 2574 9664 4665 62', '7029 Grasskamp Point', '2798027245', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Nacho', 'Rodriguez', null, true),
        (4, 'vmcauliffe3', SHA2("${process.env.GENERIC_PASSWORD}", 512),'regular', 'vmcauliffe3@theatlantic.com',  'BH74 XBKG LIJO O5GO 3BFG 0P', '7 Jay Court', '1776315145', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Vanny', 'McAuliffe', '89129', true),
        (5, 'mdwyer4', SHA2("${process.env.GENERIC_PASSWORD}", 512), 'regular','mdwyer4@toplist.cz',  'CH05 6034 2YHC 7LUB IXW7 A', '48023 Melby Road', '2301555176', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Modestine', 'Dwyer', '4824', true);
        `);

        console.log('Usuarios administradores insertados');

        await connection.query(`
        INSERT INTO experiences(id, descripcion, nombre, ciudad, precio, categoria, num_participantes, disp, fecha_inicio, fecha_fin) VALUES
    (1, 
    '¿Te gustaría ser piloto por un día? ¿En Madrid? ¡Ahora es más fácil que nunca, da el paso!

    En 1903 los célebres y pioneros en la historia de la aviación hermanos Wright lograron su primer vuelo. En 1908 patentaron su invento, el aeroplano. Más de un siglo después de este auténtico hito en la historia de la humanidad poder convertirte en piloto está al alcance de tus manos. Te invitamos a surcar el cielo y sentir que eres libre como un pájaro.

    Tienes la posibilidad de realizar vuelos de 30, 45, 60 y 120 minutos. Siempre y cuando se ajuste a estas restricciones temporales puedes proponer la ruta de vuelo que más se ajuste a tus preferencias. El inicio y el final, esto sí, tendrán que ser en el aeródromo de Casarrubios.

    En la modalidad de media hora, por ejemplo, podrás disfrutar sobrevolando el pantano de San Juan y en la de una hora el maravilloso Monasterio de el Escorial.

    No dejes escapar esta oportunidad única. ¡Sé piloto por un día en Madrid!',
    'Piloto por un Día',
    'Madrid',80.00,'Vuelo',1,true,'2021-01-01','2021-12-31'),
    (2, 
    'Seguro que alguna vez has soñado que volabas... ¿es cierto, verdad? Pues deja ya de soñar y conviértelo en realidad con este vuelo en parapente biplaza en Miraflores de la Sierra, Madrid.

    El parapente es un deporte nacido a finales del siglo XX y confundido muchas veces con el paracaidismo. La diferencia fundamental entre estos dos deportes es que mientras el paracaídas está diseñado para caer lentamente, el parapente está hecho para volar. Sí, literalmente, volar.

    Este es el motivo por el que no es necesario saltar des de una montaña o un avión, sino que es suficiente con encontrarse en un punto con un cierto desnivel que permita alcanzar corrientes de viento que pueden prolongar el vuelo durante horas. El despegue se hace lentamente des del suelo.

    La zona donde se realiza el vuelo, la Sierra del Guadarrama, te permite avistar una gran cantidad de buitres, águilas y halcones gracias a su proximidad a la mayor reserva europea de aves rapaces. Y por si la experiencia de volar fuera poco, los paisajes, impresionantes, te dejarán sin palabras.

    Durante el vuelo, fácil y seguro, serás el pasajero de un piloto experto. Además, los puntos de encuentro están cuidadosamente elegidos y son zonas de alto interés turístico para que puedas pasar el día en grande con quien quiera acompañarte.

    ¡Vive esta gran experiencia!',
    'Vuelo en Parapente Biplaza',
    'Aviles',85.00,'Vuelo',2,true,'2021-05-01','2021-10-31'),
    (3, 
    'Vive una experiencia inolvidable volando en el Túnel de Viento de Windobona, frente al Centro Comercial Islazul en Madrid.

    Experimentarás la sensación de volar gracias al aire del túnel de viento que te hará flotar simulando que estás en plena caída libre. Te permitirá practicar el paracaidismo interior y saber qué se siente al volar con un aire libre de turbulencias.

    Nada más llegar te registrarás en el centro y acto seguido conocerás a tu instructor, que te acompañará a lo largo de toda la actividad. Te hará una breve introducción a las posiciones correctas y otras pautas para que una vez dentro del túnel lo disfrutes al máximo sin preocuparte de nada.

    ¡Atrévete a volar!',
    'Alas para Uno: Túnel de Viento',
    'A Coruña',50.00,'Vuelo',1,true,'2021-02-01','2021-09-30'),
    (4, 
    'Vuela en globo con un grupo de entre 7 y 10 personas por encima del Parque Regional del Río de Guadarrama. ¡Vive una experiencia única desde las alturas con este paseo en globo! Disfruta de esta experiencia en la zona de vuelo más cercana a Madrid, a tan sólo 20 minutos de la capital

    La actividad empieza por la mañana, cuando los participantes se reúnen para iniciar el montaje e inflado del globo. Se empieza a volar al empezar el día, que es cuando el viento está más calmado y la atmósfera más fría y estable.El itinerario dependerá del viento. Los globos sólo se pueden dirigir verticalmente y el piloto aprovechará las corrientes de aire para elegir una dirección. El equipo de tierra os estará esperando cuando descendáis con un 4x4 para dirigiros al tentempié.

    Volar en globo es, por encima de todo, sentir. Arriba, sólo se oye el silencio. Suspendido en el aire, se tiene la sensación de que quien se mueve no eres tú, sino la tierra, que parece alejarse bajo tus pies. Volar en globo es sentir lo que nunca has sentido. Es vivir el momento, es vivir la emoción. Es dejarse llevar. Suave, ligera e imperceptiblemente.

    ¡No te lo pienses más!',
    'Vuelo en Globo, Fotos, Vídeo, Almuerzo y Cava',
    'San Sebastian',160.00,'Vuelo',4,true,'2021-04-01','2021-09-30'),
    (5, 
    'Experimentad la sensación de volar con este vuelo en paramotor para dos personas. Una experiencia, en Guadalix de la Sierra (Madrid), gracias al cual podréis ver el mundo a vista de pájaro.

    ¿Nunca habéis volado en paramotor? Aquí llega vuestra oportunidad. Disfrutad de un día de vuelo junto a un piloto experimentado. Sentid el viento en la cara, relajaos, dejaos llevar... por unos instantes dejaréis atrás todos vuestros problemas. El vuelo en parapente biplaza es la manera más fácil y segura de iniciarse en este deporte.

    Para el despegue es necesario dar cuatro pasos y, siguiendo los consejos del piloto, notaréis como os eleváis descubriendo la magia del vuelo. Disfrutad de unas esplendidas vistas del Valle de Guadalix, el Pantano del Vellón y la Sierra Norte.

    El vuelo se realiza por separado: primero lo lleva a cabo una persona con el instructor y a continuación el acompañante junto al instructor.

    Tengáis o no experiencia y, sea cual sea vuestra edad, ¡volad!',
    'Vuelo Paramotor para dos',
    'Valencia',150.00,'Vuelo',2,false,'2021-02-15','2021-06-30'),
    (6,
    '¿Quieres disfrutar de un día lleno de emociones? Diviértete con una Excursión en Moto Acuática por la Catedral de Palma o en la Reserva Natural "Los Deltas" de Mallorca.

    Siente la velocidad a flor de piel y vive una jornada única gracias a Mallorca On Jetski. Con esta experiencia podrás ponerte a los mandos de una moto de agua y navegar por una de las dos rutas a escoger. Si te decides por la Catedral de Palma podrás navegar hasta este edificio tan emblemático y después probar la moto en mar abierto. Será el momento en el que podrás descargar toda la adrenalina que llevas dentro.

    Si prefieres navegar por aguas cristalinas y disfrutar de acantilados y cuevas, la ruta de la Reserva Natural de “Los Deltas” te encantará. Además, podrás refrescarte con un baño en sus preciosas aguas de color turquesa.

    ¿A qué estás esperando?',
    'Excursión en Moto Acuática',
    'Palma de Mallorca',75.00,'Acuática',2,true,'2021-06-10','2021-10-02'),
    (7,
    'Vive una nueva aventura con esta experiencia de Bautismo de Buceo con Fotos y Vídeos en Vilagarcía de Arousa, Pontevedra.

    ¿Has estado alguna vez bajo el mar? Ahora tienes la oportunidad de sumergirte en las aguas del Vilagarcía de Arousa y descubrir los peces y la flora que habita. Da el paso y disfruta como nunca antes lo habías hecho. Adéntrate en el maravilloso mundo del submarinismo. ¡Seguro que querrás repetir! Con esta experiencia tendrás una primera toma de contacto con el medio subacuático. En todo momento estarás acompañado de un instructor profesional que velará por tu seguridad y hará que este momento sea inolvidable.

    Siente la sensación de estar respirando bajo el agua, desplazarte como un pez y contemplar la vida marina que hay en el mar. Además, para que te lleves un bonito recuerdo y revivas este día tantas veces como quieras se te entregarán fotos y vídeos de la actividad.

    ¡Equípate y lánzate al agua!',
    'Bautismo de Buceo',
    'Vilagarcía de Arousa', 60.00,'Acuática',4,true,'2021-06-15','2021-09-20'),
    (8,
    'Disfruta de una auténtica aventura con una jornada de Rafting en Cantabria, una oportunidad única para sentir la emoción y la adrenalina en tu cuerpo practicando un auténtico deporte.

    El Rafting es una actividad deportiva y recreativa que consiste en recorrer el cauce de los ríos en la dirección de la corriente, río abajo, sobre una embarcación. Realizarás el rafting en el tramo de Arroyo a Aldea de Ebro. Una experiencia de pura diversión, emoción y trabajo en equipo, en unas aguas rodeadas de un entorno espectacular. Una embarcación neumática (raft) y un grupo de personas dispuestas a disfrutar con la experiencia son los elementos necesarios para pasar una buena experiencia.

    Además, el nivel de la actividad se adapta a las características del grupo, por lo que tanto debutantes como practicantes pueden gozar de una jornada única. Con el descenso disfrutarás de los rápidos más fuertes del río Ebro.

    ¡No te lo pienses más y atrévete con esta divertida aventura!',
    'Rafting (Arroyo, Cantabria)','Arroyo', 35.00, 'Acuática',6,true,'2021-06-20','2021-09-15'),
    (9,
    'Vive un día diferente en la isla con esta Excursión en Barco y Avistamiento de Cetáceos en Tenerife.

    Sube a bordo de una Goleta Portuguesa y prepárate para vivir una aventura en alta mar. Esta maravillosa experiencia empieza en el puerto de los Cristianos, al sur de la isla canaria, desde donde zarparás y disfrutarás de una navegación a vela. Siente el suave vaivén de las olas y la brisa en tu rostro. Poco a poco te irás adentrando en el océano en busca de ballenas pilotos y delfines. Disfrutarás de un espectáculo natural único. Tendrás el privilegio de poder ver a estos animales en su hábitat natural en libertad.

    Después pondrás rumbo hacia la reserva marina de La Caleta o Palm-Mar. Ahí harás un alto en el camino y podrás lanzarte al agua y refrescarte con un baño en las aguas cristalinas.

    ¡La diversión está asegurada! ¿Te apuntas?',
    'Excursión en Barco y Avistamiento de Cetáceos',
    'Los Cristianos',25.00,'Acuática',12, true, '2021-06-15','2021-08-27'),
    (10,
    'Si estás pensando en pasar un día diferente y no sabes que hacer, esta experiencia de excursión en barco con comida en Valencia es la opción perfecta.

    La actividad comenzará en el puerto de Valencia. Allí te subirás al catamarán que te llevará al mar. Poco a poco verás como os iréis alejando de la costa y una vez estéis en alta mar el barco fondeará.

    La embarcación dispone de una red ubicada sobre el mar en la que podrás admirar la costa de Valencia sentado o tumbado. Durante el recorrido tendrás la oportunidad de darte un baño, tomar el sol, o simplemente relajarte lejos de las abarrotadas playas. Con esta experiencia se incluye una comida que consiste en ensalada, paella, pan y fruta . Para beber podrás escoger entre refresco o sangría. Después de unas horas en el mar el catamarán se pondrá en marcha y volveréis a la costa.

    ¡Vive una experiencia inolvidable con esta excursión al mar!',
    'Excursión en Catamarán',
    'Valencia',42.00,'Acuática',4,true,'2021-06-20','2021-07-30'),
    (11, 
    'Apúntate a la Ruta en Segway por Santa Pau y conoce la zona volcánica de La Garrotxa de una forma diferente en Girona.

    Disfruta de un paseo por la Villa Medieval y su entorno. Rodea la muralla y deslúmbrate con las espectaculares vistas de los miradores. Sin olvidarnos de los volcanes dormidos desde hace millones de años, las ermitas, los saltos de agua y mucho más. Descubre las maravillas que esta zona esconde de una forma muy dinámica y divertida.

    Antes de empezar la ruta dispondrás de tiempo ilimitado de entrenamiento con el Segway, para aprender a manejarlo con comodidad y confianza. Y durante todo el trayecto dispondrás de un guía en el grupo que te irá ofreciendo explicaciones sobre lo que vayas visitando para que no pierdas detalle.

    ¡Disfruta de una nueva forma de hacer turismo en una hermosa zona del Pirineo Oriental!',
    'Tour en Segway por los volcanes de la Garrotxa',
    'Girona',30.00,'Aventura',10,true,'2021-01-01','2021-12-31'),
    (12, 
    'Descubre de lo que eres capaz haciendo un salto de Puenting en Monistrol de Montserrat. ¡La adrenalina estará asegurada!

    Si quieres sentir cómo la energía recorre todo tu cuerpo, hacer puenting es sin duda el plan perfecto. Si te consideras una persona que le gusta vivir al límite, con este salto vivirás sensaciones inexplicables que te dejarán con ganas de repetir. A los pies de la imponente montaña de Montserrat, tu cuerpo experimentará algo inexplicable.

    Una vez llegues a la localización del puente, un técnico experto te indicará todos los pasos y movimientos que debes hacer antes y durante el salto. Con sus consejos te relajarás y sentirás totalmente seguro para empezar la aventura. Abróchate, cierra los ojos, respira hondo y salta. Aunque el momento dure escasos segundos, lo que sentirás será muy intenso.

    ¡Seguro que lo recordarás toda la vida!',
    'Puenting',
    'Barcelona',35.00,'Aventura',12,true,'2021-02-01','2021-11-30'),
    (13, 
    'Este Paseo a Caballo por el Montseny os hará sentir totalmente libres. Un plan ideal si siempre habíais querido aprender a montar a caballo.

    La nobleza que caracteriza al caballo es de sobras conocida. Descubrid el encanto de estos animales y compartid un momento único con ellos en plena naturaleza. Un paseo por el Parque Natural del Montseny que jamás querréis olvidar.

    Primero de todo recibiréis una breve clase para aprender las nociones básicas de la monta a caballo y para familiarizaros con estos increíbles animales. Veréis como os compenetráis a la perfección con estos asombrosos animales y creáis un gran vínculo con ellos.

    Pasearéis subidos a caballo por el parque natural más antiguo de Cataluña. Un mosaico de paisajes del mediterráneo y del centro de Europa que ha servido de inspiración a artistas e intelectuales. Un paraíso natural en el que respiraréis aire puro y en el que su gran variedad de especies animales y vegetales os dejarán asombrados. Subiréis montañas, podréis cruzar algún riachuelo, disfrutaréis de la naturaleza y viviréis una aventura inolvidable subidos a caballo.

    ¡Un paseo para recordar!',
    'Paseo a Caballo por la montaña',
    'Tarragona',60.00,'Aventura',15,true,'2021-03-01','2021-09-30'),
    (14, 
    '¿Quieres introducirte en un nuevo deporte de aventura? Con este barranquismo en Sadernes (Huesca) descubrirás una de las experiencias más divertidas que existen.

    El barranquismo es una actividad que se practica en los barrancos de un río. Esta actividad se realizará en el barranco de Estrets de Sant Aniol en Sadernes, dentro del Espacio Natural de la Alta Garrotxa. Un barranco, caracterizado por sus aguas de color turquesa, ideal para iniciarte en esta nueva aventura.

    En este tramo de barranquismo pasarás por diferentes rápeles, nadarás en aguas cristalinas y realizarás diferentes saltos de entre 2 y 7 metros de altura. Una actividad que la realizarás junto a un instructor experto, que te explicará la mejor manera para superar cada tramo. ¡Diviértete en familia o con amigos!

    Y para que guardes un recuerdo de este día, con esta experiencia recibirás un reportaje fotográfico.

    ¡Descubre uno de los mejores lugares para iniciarte en esta actividad',
    'Iniciación al Barranquismo',
    'Huesca',40.00,'Aventura',8,true,'2021-05-15','2021-10-11'),
    (15, 
    'Conoce un lugar muy especial en la isla de Mallorca. Descubre uno de sus principales atractivos turísticos con esta Entrada a las Cuevas dels Hams, situadas en Porto Cristo.

    La historia de estas cuevas se remonta hasta 10 millones de años. En el año 1905 el espeleólogo Don Pedro Caldentey Santandreu las descubrió mientras realizaba excavaciones en la zona. Las Cuevas dels Hams son una obra de arte de la naturaleza y ahora tendrás la oportunidad de visitarlas. Iniciarás la experiencia descendiendo hacia la Cueva Redonda, que alberga un inmenso jardín botánico, verde y lleno de vida.

    Después continuarás por la Cueva Azul, donde conocerás la historia de Mallorca a través de un documental. Además, también podrás admirar la nueva y espectacular iluminación led, las “Columnas de Sanson”, las “Llanuras de Fra Mauro” y el “Foso del Infierno”, un auditorio donde se presentará una proyección gigante sobre una roca milenaria de la Cueva. Seguidamente pasarás a la Cueva Clásica, con 12 galerías impresionantes y el lago subterráneo Mar de Venecia, donde se ofrece un espectáculo musical.

    Déjate llevar por la magia de estas cuevas de Mallorca. ¡Visítalas!',
    'Entrada a Cuevas dels Hams',
    'Palma de Mallorca',20.00,'Aventura',20,false,'2021-02-15','2021-05-30'),
    (16,
    'Adentraos en un spa japonés en pleno centro de Madrid: Esenzias Spa. Cuidad vuestro bienestar de una forma original y que os dejará totalmente renovados.

    Tendréis la oportunidad de entrar en su circuito onsen, en el que encontraréis cuidadas instalaciones pensadas para vuestro disfrute. Empezad a relajaros en el jacuzzi y en la sala de vapor. Activad vuestra circulación pasando por la piscina de agua fría. Descubrid un relax sin igual y eliminad toxinas en el Ofuro, una piscina de madera japonesa con agua muy caliente. Acabad en la tranquila sala de descanso en la que podréis reconfortaros con un té.

    Después os esperará un masaje para relajaros en cuerpo y mente. Podréis elegir entre un masaje relajante, descontracturante, sensitivo, de cabeza y pies o uno con técnicas orientales. Aliviaréis tensiones musculares y eliminaréis el estrés.

    ¡Elegid esta experiencia de relax diferente y especial!',
    'Circuito Onsen Spa y Masaje para dos en Esenzias',
    'Madrid', 108.00, 'Relax', 2,true,'2021-02-10','2021-05-30'),
    (17,
    'Si queréis pasar un rato relajados y disfrutar en pareja de un masaje estad atentos a esta experiencia que os proponemos. Alejaos del estrés con estos Baños Termales y Masaje Relajante en Aire Ancient Baths Barcelona.

    Dejaos llevar por el recorrido que empezará en el agua templada del tepidarium (36º), la caliente del caldarium (40º) y la fría del frigidarium (16º). Seguidamente os beneficiaréis de un baño de vapor en el Hammam y podréis sentir el roce del agua en el baño de mil chorros. Deshaceos del estrés y del cansancio y ayudaos a mejorar el sueño.

    Mientras estéis realizando el recorrido os llamarán para daros un masaje relajante. Tumbaos en la camilla y dejad que los profesionales os vayan eliminando la tensión muscular.

    Disfrutad con vuestra pareja de una sesión de relax y sentíos mejor.',
    'Baños Termales con Aromaterapia y Masaje Relajante',
    'Barcelona',134.00,'Relax',2,true,'2021-01-13','2021-11-30'),
    (18,
    '¿Buscáis alejaros de la rutina y vivir un momento de paz y tranquilidad? Entonces haced un hueco en la agenda y relajaos con un Circuito Spa en Estepona . Una experiencia ideal para desconectar y alcanzar el bienestar total de vuestro cuerpo y mente.

    Descubrid este lugar destinado al bienestar, la salud y la belleza. Dejaos llevar e iniciad el recorrido disfrutando de 3 piscinas climatizadas de agua salada donde podréis relajaros y liberar el cuerpo de todo el cansancio. A continuación podréis masajear vuestro cuerpo con las burbujas de los jacuzzis y cuidar vuestra piel, dejándola limpia y suave, en la saunas y en el hammam. Además, también tendréis acceso a las duchas de contraste e hidromasaje, perfectas para destensar la musculatura, y al recorrido de piedras.

    Aprovechad esta oportunidad para cuidar vuestro cuerpo con agua recién extraída del Mediterráneo y ya veréis qué rápido descubrís los múltiples beneficios que tiene el agua para relajar y mimar nuestro cuerpo.

    No os lo penséis más y animaos a vivir un momento de bienestar total.',
    'Circuito Spa para dos en Elba Estepona Gran Hotel 5*',
    'Málaga',60.00,'Relax',3,true,'2021-01-15','2021-10-20'),
    (19,
    'Dejad que la calma os invada con una experiencia de bienestar que os encantará. Disfrutad de un Circuito Spa con Masaje para dos en San Sebastián, Guipúzcoa y olvidaos del estrés diario.

    El Hotel Catalonia Donosti 4*, situado en un mirador natural sobre el cerro de San Bartolomé, os abre sus puertas y os invita a disfrutar de sus más de 350m2 dedicados al relax. Podréis desconectar en un espacio acogedor en el que encontraréis todo lo que necesitáis para pasar unos minutos de evasión. Desde una piscina de agua fría, una piscina de chorros, un baño de vapor, duchas de sensaciones y una zona de relax. ¡No os faltará de nada!

    Además, esta experiencia también incluye un masaje relajante con el que podréis aliviar las tensiones y salir totalmente renovados. Recargad las pilas y no penséis en nada más que en vosotros.

    El relax os está llamando. ¿Os apetece?',
    'Circuito Spa y Masaje para dos en Hotel Catalonia Donosti 4*',
    'San Sebastian',148.00,'Relax', 2,true,'2021-01-20','2021-12-20'),
    (20,
    'No te pierdas esta chocolaterapia si eres una auténtica chocoadicta. Todos los beneficios del chocolate sin ningún remordimiento en Valladolid. Y después, un relajante baño en el jacuzzi. ¡Saldrás como nueva!

    El chocolate es una sustancia estimulante por naturaleza, reactiva la circulación, relaja la musculatura y tiene unos estupendos efectos antioxidantes. Además el aroma de cacao fomenta la liberación de endorfinas, procurándonos sensaciones de placer, relajación, energía y felicidad. Por todas estas razones el chocolate se ha venido empleando en tratamientos corporales.

    Con el masaje de chocolate caliente podrás sentir todos los nutrientes del chocolate, con vitamina E y antioxidantes, eliminarás el estrés, relajarás tu cuerpo y tu mente y revitalizarás la piel dejándola suave y ligeramente perfumada.

    Y para acompañar este maravilloso tratamiento, podrás disfrutar de un relajante jacuzzi con cromoterapia y cielo estrellado, una pequeña piscina con una temperatura de 32º y chorros de agua, ideal para relajar cuerpo y mente.

    ¡Ven a mimarte! ¡Te lo mereces!',
    'Chocolaterapia y Jacuzzi',
    'Arroyo de la Encomienda',45.00,'Relax',1,true,'2021-02-02','2021-11-25'),
    (21, 
    'Adéntrate de una forma entretenida en el fascinante mundo de la Ribera del Duero con esta Jornada Enológica en Aranda.

    La localidad burgalesa de Aranda de Duero cuenta con unas bodegas subterráneas en el casco histórico de la ciudad. Durante todo el año mantienen un nivel de humedad constante y una temperatura entre los 11ºC y los 13ºC. Esto unido a la ausencia de ruidos y vibraciones, hacen un lugar ideal para la conservación de los caldos arandinos.

    Visitarás una bodega medieval guiado por un divertido personaje del siglo XVIII, que te enseñará este lugar de una forma amena. Además, podrás degustar la comida típica de la zona con un menú en un asador típico. Saborea un manjar que contentará a los paladares más exigentes.
    Para finalizar, realizarás una cata para introducirte en el mundo del vino. A través de cinco vinos, aprenderás las principales características: colores, aromas y sabores.

    Si eres amante del mundo de la enología, ¡no dejes escapar esta oportunidad!',
    'Jornada Enológica: Visita Bodega, Curso de Cata de Vino y Comida en Asador Castellano',
    'Burgos',65.00,'Gastronomia',16,true,'2021-05-01','2021-09-30'),
    (22, 
    'Sentid la pasión por el vino con la Visita a las Bodegas Muñana y Degustación de Vino en Granada.

    No os perdáis esta experiencia en las bodegas Muñana, un lugar donde la tradición y la ilusión por el vino se encuentran en todos los rincones. Sumergíos en el apasionante mundo de la viticultura con los profesionales de la bodega con más personalidad de Andalucía. Además, evadíos disfrutando de un paisaje privilegiado rodeado de naturaleza con las montañas de Sierra Nevada como principales vistas.

    Empezad con un agradable paseo entre los viñedos, respirad aire puro y contemplad las viñas en su máximo esplendor. Después visitaréis la bodega y aprenderéis todo el proceso de la elaboración del vino. Y para terminar, no os podréis ir sin probar sus creaciones. Por eso realizaréis una cata y saborearéis dos de los deliciosos vinos de la bodega mientras aprendéis unas nociones básicas sobre catas.

    Vivid un momento mágico ¡No os defraudará!',
    'Visita a las Bodegas Muñana y Degustación de vino',
    'Granada',29.00,'Gastronomia',20,true,'2021-02-01','2021-11-30'),
    (23, 
    '¿Queréis descubrir la primera almazara turística de la provincia de Jaén? Haced una Visita con Cata de Aceites a Oleícola San Francisco.

    La empresa es una fábrica familiar con origen en el 1989, situada en el municipio de Begíjar, Jaén. Tendréis el privilegio de hacer una visita guiada junto con profesionales de la almazara que os recibirán dándoos a conocer el mundo de los aceites. Entraréis en la almazara mientras os van explicando cómo funciona. Además, también sabréis cómo elaboran sus aceites desde el origen de sus plantaciones con olivos hasta el embotellado.

    Para completar esta experiencia de oleoturismo haréis una cata de sus aceites de oliva virgen extra junto con un aperitivo compuesto por un variado tapeo típico de Jaén. También os ofrecerán un porrón de vino.

    Disfrutad de la gastronomía andaluza y de sus mejores aceites de oliva. ¡Merece la pena probarlo!',
    'Visita Guiada con Cata de Aceites, Aperitivo y Porrón de Vino para dos en Oleícola San Francisco',
    'Jaén',36.00,'Gastronomia',10,true,'2021-03-01','2021-09-30'),
    (24, 
    '¿Os gusta la cerveza? Ahora tenéis la oportunidad de visitar la Fábrica Mond y hacer una Cata de Cerveza y Maridaje en Sevilla.

    La fábrica está situada a 10 minutos del centro de la ciudad, en la calle Torrepavas. Durante vuestro paso por sus instalaciones conoceréis todo el proceso de elaboración de la cerveza artesanal Mond, desde la molienda de la cebada hasta el etiquetado final. Además, tendréis el privilegio de disfrutar con su sabor en la zona de degustación, donde podréis probar hasta 3 variedades de cerveza Mond.

    Dejaos sorprender por el gusto característico de cada una de las variedades, donde la espuma, el amargor y su efecto refrescante o afrutado va cambiando. Aprovechad esta visita y cata de cerveza en Sevilla que no os dejará indiferentes. Viviréis un momento único que no olvidaréis.

    ¡No os lo penséis más!',
    'Visita a Fábrica Mond con Cata de Cerveza y Maridaje',
    'Sevilla',18.00,'Gastronomia',8,true,'2021-05-15','2021-08-11'),
    (25, 
    '¿Os gusta el mundo de los vinos? Os recomendamos esta experiencia de Enoturismo en Rioja Alavesa.

    Empezaréis visitando unos viñedos que se encuentran en esta comarca de Álava, amparada dentro de la D.O.Ca Rioja. Conoceréis las zonas de producción, el clima, los tipos de suelo, las variedades, etc. Os darán la posibilidad de participar en las labores que se estén realizando en el momento (vendimia, poda, plantado...). Y también os ofrecerán un almuerzo campero con el que os deleitaréis con productos de la zona.

    Posteriormente pasaréis por su bodega donde descubriréis el proceso de elaboración de sus vinos de la D.O.Ca. Rioja, la más antigua de las denominaciones españolas. En la sala de las barricas os explicarán los métodos de crianza y envejecimiento así como las diferentes categorías de vinos. Aquí también podréis participar en las labores como el pisado, descube, prensado y filtrado entre otras. Al finalizar haréis una cata de tres vinos D.O.Ca. Rioja.

    Disfrutad y sacadle el máximo provecho a esta actividad de enoturismo. ¿Preparados?',
    'Enoturismo: Visita a Viñedos y Bodega, Cata de Vinos, Almuerzo y Actividades de Vinicultura',
    'Alava',65.00,'Gastronomia',20,true,'2021-02-15','2021-06-30'),
    (26,
    'Si siempre has querido sentir la velocidad, ahora puedes hacerlo con esta experiencia. Disfruta de un día en uno de los circuitos más rápidos de España: conducir un Ferrari F430 y un Formula 2.0.

    Esta experiencia se inicia desde el box, donde realizarás una vuelta de reconocimiento con un piloto profesional. Él te dará un briefing explicativo del circuito y sus características.

    A continuación, pon a prueba tu adrenalina al volante del Ferrari F430, donde el instructor te explicará su funcionamiento y la mejor manera de disfrutar de esta experiencia. Una vez realizada la conducción con el Ferrari F430 entrarás en boxes, donde cambiarás el Ferrari por el Formula 2.0. Al igual que con el Ferrari, pisarás a fondo el acelerador para recorrer el circuito, acabando de nuevo en el box.

    En todo momento el instructor te guiará para realizar tu sueño de la forma más especial y segura.



    Adrenalina en estado puro en un jornada que nunca olvidarás.',
    'Ferrari F430 F1 y Formula 2.0',
    'Valencia',179.00,'Motor',1,true,'2021-01-01','2021-08-30'),
    (27, 
    'Si siempre has querido sentir la velocidad, ahora puedes hacerlo con esta experiencia. Disfruta de un día en uno de los circuitos más rápidos de España: conducir un Ferrari F430 y un Lamborghini Gallardo.

    Esta experiencia se inicia desde el box, donde realizarás una vuelta de reconocimiento con un piloto profesional. Él te dará un briefing explicativo del circuito y sus características.

    A continuación, pon a prueba tu adrenalina al volante del Ferrari F430, donde el instructor te explicará su funcionamiento y la mejor manera de disfrutar de esta experiencia. Una vez realizada la conducción con el Ferrari F430 entrarás en boxes, donde cambiarás el Ferrari por el Lamborghini Gallardo. Al igual que con el Ferrari, pisarás a fondo el acelerador para recorrer el circuito, acabando de nuevo en el box.

    En todo momento el instructor te guiará para realizar tu sueño de la forma más especial y segura.


    Adrenalina en estado puro en un jornada que nunca olvidarás.', 
    'Ferrari F430 F1 y Lamborghini Gallardo ', 
    'Navarra',179.00,'Motor',1,true,'2021-01-01','2021-08-30'),
    (28,
    '¡Conduce tres coches! Ponte a los mandos de un Ferrari, un Lamborghini y un Porsche en esta experiencia sin igual.

    Si eres un apasionado del motor y quieres vivir nuevas sensaciones, ¡No te lo pienses más! Conduce el Ferrari F430, el Lamborghini Gallardo y el Porsche Boxter y descubre, de primera mano, las sensaciones que experimentan los pilotos de Formula 1 sobre el asfalto.

    A la llegada se llevará a cabo un briefing, donde se darán unas nociones prácticas para que aprendas a manejarlos. A continuación, ¡Empieza lo realmente divertido! Conduce un Ferrari, un Lamborghini y un Porsche en circuito, pisando a fondo el acelerador y disfrutando al máximo de un sinfín de sensaciones.

  
    Adrenalina en estado puro. ¿¡Te quedarás sin probarlo!?',
    'Trío de Coches: Ferrari, Lamborghini y Porsche',
    'Madrid',249.00,'Motor',1,true,'2021-01-01','2021-08-30'),
    (29,
    'Déjate sorprender por un día lleno de emoción y adrenalina. Disfruta de un Vuelo en Avioneta y conduce un Ferrari en Carretera por Barcelona.

    Adéntrate en el mundo de la aviación y descubre sensaciones nuevas a bordo de una avioneta. Sobrevuela lugares con mucho encanto y divisa paisajes maravillosos desde el aire. Tu aventura comenzará desde el aeropuerto de Sabadell y desde ahí pondrás rumbo a las montañas de Montserrat o hacía la costa del Maresme. ¡Tú eliges!

    También tendrás la oportunidad de pilotar un Ferrari F430 F1 por carretera. Ponte al volante de este increíble coche y siente la potencia del motor y la aceleración de 0 a 100 en 4 segundos. Descubre la sensación al conducir el coche de tus sueños y ser el centro de todas las miradas. Nota como la adrenalina recorre todo tu cuerpo. Disfruta de un emocionante paseo por las carreteras cercanas a Montmeló.

    ¿Te vas a perder vivir el día con el que todo el mundo sueña?',
    'Vuelo en Avioneta y Conducción de Ferrari en Carretera',
    'Sabadell',119.00,'Motor',1,true,'2021-01-01','2021-08-30'),
    (30,
    'Si te gustan las emociones fuertes y los deportes de riesgo, libera toda tu adrenalina aprendiendo a derrapar con este Curso de Drift en Madrid.

    El Drifting o drift consiste en derrapar de manera que el vehículo forme un ángulo con la dirección de movimiento. Este deporte se hizo popular a finales de la década de los 90 cuando llegaron pilotos especialmente entrenados y con coches preparados para realizar derrapes controlados a altas velocidades.

    Con esta experiencia disfrutarás de la conducción de un BMW 540 en un circuito de asfalto. Para empezar, harás una vuelta de reconocimiento con Fran Bolaños, campeón de España en categoría AM de Drift en 2012, quién te enseñará los mejores trucos y te explicará todo lo necesario para sentirte más seguro y cómodo con el vehículo. Una vez todo entendido, ya te podrás poner al volante y empezar a trazar curvas de una manera distinta y divertida.

    ¡Dale al gas! Y anímate a vivir una experiencia inolvidable llena de sensaciones fuertes.',
    'Curso de Drift en Asfalto (Madrid)', 
    'Leganés', 49.00, 'Motor', 1, true, '2021-01-01', '2021-08-30'),
    (31, 
    '¿Te gusta el mar y te gustaría explorar sus profundidades? No te pierdas esta oportunidad y disfruta del Pack de Bautismo de Buceo en diferentes zonas de España. ¿A qué esperas?

    Prepárate para sumergirte e iniciarte en la disciplina del submarinismo de la mano de un instructor profesional. Antes que nada, te explicarán el funcionamiento de la actividad y te enseñarán todo lo necesario para disfrutar de la inmersión. Te equiparás con el neopreno, gafas, aletas, botella, etc. y ¡al agua!

    Habrá llegado el momento de poner en práctica todo lo aprendido y de observar todo lo que el fondo marino tiene que ofrecer. Bajarás a una profundidad de unos 5-6 metros aproximadamente y experimentarás todas las sensaciones del buceo. Además, con algunas de las opciones disponibles te podrás llevar a casa fotos y/o vídeo de la actividad para recordarla siempre.

    ¡Sumérgete en esta aventura!',
    'Pack Bautismo de Buceo',
    'Lanzarote',49.00,'Pareja',2,true,'2021-01-01','2021-12-31'),
    (32, 
    'El globo, el viento ¡y vosotros! Ahora podéis vivir esta experiencia: vuelo romántico en globo. Un vuelo especial que os llevará a vivir momentos increíbles.

    Disfruta del vuelo con la primera empresa autorizada en España para realizar vuelos en globo con pasajeros, empresa de Turismo Activo de la Junta de Castilla y León T.A 40-28, con pilotos profesionales expertos y que además tienen una gran experiencia en algunos de los lugares más famosos del mundo en paseos en globo como Capadocia (Turquía), Bagán (Myanmar) y Canadá. El primer piloto de Globos Boreal es Javier Tarno 6 veces campeón de España de Aerostación y tiene más de 4000h de vuelo.

    Disfruta de la sensación de flotar hasta los 1.000 metros de altura, mientras el viento empuja el globo y descubrís los paisajes asombrosos que esconde Segovia. La actividad empieza al amanecer, cuando os reuniréis para iniciar el montaje e inflado del globo. Volaréis a primera hora del día, que es cuando el viento está más calmado, la atmósfera más fría y estable y hay un marco romántico incomparable. Una vez en tierra brindaréis con una copa de cava y volveréis en el 4x4 al punto de origen habiéndose hecho entrega de un diploma acreditativo.

    ¿A qué esperáis?',
    'Vuelo Romántico en Globo con Cava, Almuerzo y Reportaje Fotos y Vídeo HD',
    'Segovia',880.00,'Pareja',2,true,'2021-04-01','2021-09-30'),
    (33, 
    '¿Te atreves a volar? Realiza ya tu Salto en Paracaídas en Castellón y no esperes más. Podrás surcar el cielo y contemplar el mundo tal y como lo ven los pájaros.

    Con esta experiencia realizarás un salto tándem de la mano de SkyTime. Esta empresa es el centro de paracaidismo más cercano a la playa y con mejor clima que se puede encontrar en Europa. Disfrutarás de las vistas de la hermosa Costa Azahar como nunca lo habías hecho. Te lanzarás al vacío junto a un experimentado instructor que hará de este salto una experiencia inolvidable.

    La actividad empezará con una breve explicación de 10 minutos. Seguirá con el ascenso en avión a 4000 metros de altura y, unido al instructor mediante un arnés, disfrutarás de una caída que durará aproximadamente unos 50 segundos, seguidos de 7 minutos de vuelo en paracaídas sobrevolando las costas de Castellón.

    Atrévete a dar el paso y lánzate al vacío. ¡No esperes más!',
    'Salto en Paracaídas',
    'Castellón',230.00,'Pareja',2,true,'2021-3-01','2021-08-31'),
    (34, 
    '¿Queréis desconectar del ajetreo del día a día y disfrutar de una experiencia relax en pareja? De vez en cuando es necesario tomarse unos instantes de descanso y para ello os ofrecemos esta escapada romántica con spa en Toledo.

    Aprovechad la estancia para descubrir los encantos de esta ciudad que fue declarada Patrimonio de la Humanidad por la UNESCO en 1986. Una ciudad llena de cultura en la que podrás encontrar varios lugares de interés como el Monasterio de San Juan de los Reyes o la Catedral de Santa María.

    En la actualidad se utilizan los efectos del agua para ofrecer diferentes terapias que favorecen nuestro bienestar. Para ayudaros a conseguir un estado de relajación total dispondréis de un circuito spa que os dejará como nuevos. Ideal para que recarguéis energías y viváis unos irrepetibles momentos sumidos en verdadera paz y tranquilidad.

    ¿A qué estáis esperando para vivir esta experiencia?',
    'Escapada Romántica con Circuito Spa en Hotel Beatriz Toledo Auditorium & Spa 4*',
    'Toledo',110.00,'Pareja',2,true,'2021-01-01','2021-12-31'),
    (35, 
    '¡Esta escapada romántica en un Hotel con Spa en Albacete es el plan ideal si no encontráis ningún momento para estar solos! En el Hotel Beatriz Albacete & Spa podréis vivir una noche muy especial.

    En el Hotel Beatriz Albacete & Spa disfrutaréis mucho de vuestra estancia. Para que os podáis relajar lo mejor será que vayáis al spa del hotel, el SPA & Wellness Center. Por otra parte, si queréis explorar la ciudad de Albacete, hay muchos sitios que podéis visitar. Os recomendamos que visitéis la catedral de la ciudad o el Pasaje de Lodares ¡Recorred los rincones de la ciudad y descubrid todos sus secretos mientras pasáis una noche muy romántica!

    Relajaos en el SPA & Wellness Center. Recorred las diferentes salas y veréis que los chorros de agua, las cascadas y las bañeras de hidromasaje os tranquilizan. Evadíos de toda preocupación. A continuación cenaréis en uno de los restaurantes que hay en el mismo hotel. Finalmente, Por si esto os parece poco, os alojaréis en una de las habitaciones dobles del hotel, redondeando de esta forma una noche que no querréis olvidar.

    ¡Regalaos una experiencia que no querréis que termine!',
    'Escapada Romántica con Circuito Spa, Hotel y Cena en Hotel Beatriz Albacete & Spa 4*',
    'Albacete',120.00,'Pareja',2,true,'2021-01-31','2021-12-31');
     
     `);

        console.log('Experiencias insertadas');
        await connection.query(`
        INSERT INTO photos (id, alt, url, id_experience) VALUES 
       (1, 'experience', 'cfb3a228-ad5f-408c-b70c-31311c6b203b.jpg', 1),
       (2, 'experience', 'df8b9784-5b04-4518-a79d-ff799609fcd9.jpg', 1),
       (3, 'experience', 'cc547760-9995-4fac-995d-8278c17f4ef0.jpg', 1),
       (4, 'experience', 'ffea2357-308a-4a8b-97ca-59d73b33dff2.jpg', 2),
       (5, 'experience', 'ef002bd5-3796-4a4c-9300-566b71094b10.jpg', 2),
       (6, 'experience', 'ef002bd5-3796-4a4c-9300-566b71094b10.jpg', 2),
       (7, 'experience', 'f72dbd01-c7ce-45b6-97fb-12da87ce83ed.jpg', 3),
       (8, 'experience', 'f5d0777a-f8a7-4650-a6f6-f91f02d6839c.jpg', 3),
       (9, 'experience', '742c0a30-74db-45d2-ab45-1f11270b76ce.jpg', 4),
       (10, 'experience', '02e3cc69-b869-4dce-a5de-52bf4aed29d6.jpg', 4),
       (11, 'experience', '286bc8c3-cbe5-4467-af00-65e08aa03e9d.jpg', 4), 
       (12, 'experience', '2973004e-4bb7-4ef4-b398-f3550e168a8a.jpg', 5), 
       (13, 'experience', 'ecc59dc3-223c-46bd-98b5-27540bbb58ec.jpg', 5),
       (14, 'experience', 'd215b84d-b1f2-4364-ace8-f8dbb56c6868.jpg', 5),
       (15, 'experience', 'e482cfbb-212e-46c7-a7cf-a32c25595851.jpg', 6),
       (16, 'experience', '084d4a96-ca70-487c-8649-b9525cb9c563.jpg', 6),
       (17, 'experience', '4c347a5d-d688-4f5b-bf66-af31e4ffc5f1.jpg', 6),
       (18, 'experience', '7054734f-e2b1-4d2c-919c-36c8b357258f.jpg', 6),
       (19, 'experience', '1614df62-db49-4fdd-8ce1-4a71c1bcf248.jpg', 7),
       (20, 'experience', '095d5f46-c6a0-4ee6-82c8-b83306d08e15.jpg', 7),
       (21, 'experience', '7cd32cd6-4a30-4fa4-a487-9dc6f7929e0e.jpg', 7),
       (22, 'experience', '208e38ea-7d47-4187-8fff-d99c55599edb.jpg', 7),
       (23, 'experience', '6e006e4b-d7a6-4041-8bc8-07ab954c338d.jpg', 8),
       (24, 'experience', '4b170bd9-bd7d-4584-9ae0-0196924afb43.jpg', 8),
       (25, 'experience', 'a4efab5a-97dd-42d1-9060-8d4ad13cb22b.jpg', 8),
       (26, 'experience', 'a1ea1e6d-4945-4adc-b113-4099c9ab7815.jpg', 9),
       (27, 'experience', '3c5c30c0-cba2-46f8-b6bb-cff7d2df320b.jpg', 9),
       (28, 'experience', '6037e45f-8b81-4843-856b-70625245b76b.jpg', 9),
       (29, 'experience', '935ca811-9e87-4894-ae60-2be55bd65c5f.jpg', 9),
       (30, 'experience', 'e8261079-8154-47c8-b7e5-72a09fd5182c.jpg', 9),
       (31, 'experience', '352e97ba-0c0b-4e77-bfbc-1e91309a10c1.jpg', 10),
       (32, 'experience', '760b8397-3cc3-48fb-9d8b-9da20039b414.jpg', 10),
       (33, 'experience', '3ce46fd3-9479-47ed-a66a-5265a726688d.jpg', 10),
       (34, 'experience', '37323247-0219-4fc9-85f8-9d8342fc2fe9.jpg', 11),
       (35, 'experience', '4b965d5f-b5ba-4831-8ce3-3e25c69c6802.jpg', 11),
       (36, 'experience', 'fe0206ea-fd81-45b6-9b24-450760c0bb93.jpg', 11),
       (37, 'experience', '87d13b01-e03c-4f08-9a21-62fb9b57ef6f.jpg', 12),
       (38, 'experience', '40ffb762-c230-47f1-848b-e4d394295a83.jpg', 12),
       (39, 'experience', '82a457eb-4848-4895-a49b-2bcb9a71697e.jpg', 12),
       (40, 'experience', 'bbe04231-746a-4a0a-b461-b33b54a0156f.jpg', 13),
       (41, 'experience', 'bbc0ab76-a8a3-4ba5-998d-b1d3eff3ee7c.jpg', 13),
       (42, 'experience', '07d6e461-7b5e-4293-974c-a42c619544bd.jpg', 13),
       (43, 'experience', '646ad259-6702-43f4-981b-1301f4b49ade.jpg', 14),
       (44, 'experience', 'cab1534c-6634-4920-a652-e34c855102cc.jpg', 14),
       (45, 'experience', '80115b8f-8ab8-4077-8c39-67bab83dab9f.jpg', 14),
       (46, 'experience', '63f9ecb9-c303-4a68-92e3-dacad7de50fa.jpg', 15),
       (47, 'experience', 'd8782b67-f168-4ab0-8ce4-9a5d9a1b83dc.jpg', 15),
       (48, 'experience', '03aaf0c4-d656-41ad-b3a8-3ac17c8458c9.jpg', 16),
       (49, 'experience', 'c516ec14-2616-425d-a6fb-b163979a0f52.jpg', 16),
       (50, 'experience', '097ae454-b070-4804-8fd2-bd26ddc0f85b.jpg', 16),
       (51, 'experience', 'f29a2487-accb-4217-b348-3ef5c099d680.jpg', 16),
       (52, 'experience', 'c6edb434-ef7f-48e2-92b5-497d3438c182.jpg', 17),
       (53, 'experience', '0475c581-304b-4030-9b3c-e262dd7ef2af.jpg', 17),
       (54, 'experience', '0303094e-d4b3-47fe-a247-e8d1a7ef94c5.jpg', 17),
       (55, 'experience', '72baba43-b701-46e5-85a3-15bead49e080.jpg', 18),
       (56, 'experience', 'cf46dd94-eb4a-41d9-aee5-f004516f881e.jpg', 18),
       (57, 'experience', '86643e03-8488-4132-97f5-1765c33114d3.jpg', 18),
       (58, 'experience', 'e3e48517-26de-4fb1-9d9c-17f41a337f1e.jpg', 18),
       (59, 'experience', 'a86fa35f-3376-4b25-9e2b-f8d889af8392.jpg', 19),
       (60, 'experience', '1f8bb85c-1ee7-49d9-8501-e744764bc73a.jpg', 19),
       (61, 'experience', '47726b2c-675a-4c07-aa8e-caa05ce8f3a2.jpg', 19),
       (62, 'experience', '85e9e3c5-53bf-42d8-a07d-029d86d2a577.jpg', 19),
       (63, 'experience', '9c5c45e9-ff3a-47ee-aec9-c91f6f4b51d5.jpg', 20),
       (64, 'experience', '56324e76-7de5-4303-a6ff-dc94b1b5b2b1.jpg', 20),
       (65, 'experience', '846a156b-5913-4324-8a54-a7f9d15d8738.jpg', 20),
       (66, 'experience', '210318da-9deb-41b1-b4d0-7c9ed2422b4e.jpg', 20),
       (67, 'experience', '97e9634e-9658-4174-a895-c0db47724d69.jpg', 21),
       (68, 'experience', 'edc17273-ad51-447f-abc5-2b0b81041f57.jpg', 21),
       (69, 'experience', 'fcf0d9a5-e8de-4995-8993-9cc30ee15b04.jpg', 21),
       (70, 'experience', 'bcab7c48-0d5e-4a26-b326-1d9fa8da7866.jpg', 21),
       (71, 'experience', '88b607f7-d373-4a4f-a41b-8b56f190ca42.jpg', 22),
       (72, 'experience', '90c49d2c-12c7-41ec-8045-88cfa311e090.jpg', 22),
       (73, 'experience', 'fb88491c-6b19-4989-a697-a664bc665a5e.jpg', 22),
       (74, 'experience', '3285ce0f-4cbf-494c-95f3-2276cd265cf5.jpg', 22),
       (75, 'experience', '079f6868-4e32-4cfe-9e15-95215eb8378e.jpg', 23),
       (76, 'experience', '33d4f41c-048c-42c8-8bc5-23db7f860edd.jpg', 23),
       (77, 'experience', 'b8ad74fd-8a4b-49ec-9c76-f0706957747d.jpg', 23),
       (78, 'experience', '1b7d3688-ab71-4c67-bc30-07ce22d8b720.jpg', 23),
       (79, 'experience', '1adc5c43-4e6e-47c0-b00e-b38ce9d5ca74.jpg', 23),
       (80, 'experience', 'e3dbc86c-19c1-4b69-bc53-64049dfe1a89.jpg', 24),
       (81, 'experience', '8ea18bbd-f8da-4527-aff3-a3b750549216.jpg', 24),
       (82, 'experience', '48c725b0-9cef-41ba-adc6-496af074d53a.jpg', 24),
       (86, 'experience', 'e0331c0e-628d-4495-bac7-39879a043e50.jpg', 25),
       (87, 'experience', 'cabd2c1c-12b3-4f5a-b6dd-191da6821965.jpg', 25),
       (88, 'experience', '3f5fa4d9-916c-422d-baa0-9f0a736a68d5.jpg', 25),
       (89, 'experience', 'bb93a4d6-d4b6-46c2-be9b-4ca5d71b7f5c.jpg', 26),
       (90, 'experience', '6f51e057-c463-4191-be86-53839173f213.jpg', 26),
       (91, 'experience', '983da997-7023-4522-99f5-60c8e8f935fc.jpg', 26),
       (92, 'experience', 'c872246f-5dfb-4680-81d7-7137e705e0cc.jpg', 27),
       (93, 'experience', 'bae4dcb8-8217-4d0e-8fc6-922306873e63.jpg', 27),
       (94, 'experience', '5769c967-ce9c-48fe-a40e-e18b4bdf599c.jpg', 27),
       (95, 'experience', 'c397aab3-2142-419d-a6f0-943af611a5ab.jpg', 28),
       (96, 'experience', '90016ba5-3ef3-48dc-b113-71085658775f.jpg', 28),
       (97, 'experience', 'f8694f3d-ac6e-4499-8232-5fac991d7abf.jpg', 28),
       (98, 'experience', '881e3c43-4581-44e3-b29e-6856dc06a945.jpg', 28),
       (99, 'experience', '094e348e-65d5-437b-a6bd-afcf33b051e1.jpg', 29),
       (100, 'experience', 'f7423740-2473-4c79-b1d4-7c39c37cf50d.jpg', 29),
       (101, 'experience', '1c48912a-2022-4cd9-9224-073e1aecc7d5.jpg', 30),
       (102, 'experience', '4ec11ccd-16c7-4baf-85c9-807ce552808c.jpg', 30),
       (103, 'experience', '04438e1a-9d9c-4b9b-ba2d-53bcb249d406.jpg', 30),
       (104, 'experience', '4252ead0-b6e4-493a-91c3-3ab98f347deb.jpg', 31),
       (105, 'experience', 'a523ba8f-f66e-4c86-9d59-b9f4d5e8fc8a.jpg', 31),
       (106, 'experience', 'fee7a6ba-6e8d-4a37-ba1d-41ace3101460.jpg', 31),
       (107, 'experience', 'ec59f1b8-ff0a-4d5a-ae56-00b9a46580f8.jpg', 31),
       (108, 'experience', 'd9dc3bf3-0dbb-4568-af78-0a82ecb6e7f0.jpg', 32),
       (109, 'experience', 'c7b0e9ac-88da-4fef-b346-cdba27cadda0.jpg', 32),
       (110, 'experience', '674be0c0-3aad-4689-b700-72f9eb9cef85.jpg', 32),
       (111, 'experience', '8694fadf-94e0-4d2f-ac38-73e8a381682c.jpg', 32),
       (112, 'experience', '2c4aae67-82cf-44de-ac97-598b965dd251.jpg', 32),
       (113, 'experience', 'df7b748b-4a43-4572-bab7-99ecdb55f174.jpg', 33),
       (114, 'experience', '60d81028-b47e-40d7-9679-8e49193e2c14.jpg', 33),
       (115, 'experience', 'ecf27b57-5056-4434-a350-12ff196b73c8.jpg', 34),
       (116, 'experience', '3526312c-22da-4d70-9406-1fa6df60c1ff.jpg', 34),
       (117, 'experience', 'a8592d50-dd6a-40a9-bcac-eefc8629d001.jpg', 34),
       (118, 'experience', '57f24dc8-927b-4a8b-886e-b432ba41281d.jpg', 34),
       (119, 'experience', '3ad99cfe-e757-4783-8405-51769b481ee4.jpg', 35),
       (120, 'experience', '8ed6ba48-dbef-447b-88fb-012aa7fc0d46.jpg', 35),
       (121, 'experience', 'b53d7353-8a02-47f3-a994-ab899999d103.jpg', 35);
`);
        console.log('Fotos insertadas');

        await connection.query(`
          INSERT INTO bookings (id, cantidad, fecha_reserva,fecha_compra, precio_total, estado, valoracion, comentario, id_user, id_experience) VALUES 
          (1,1,'2021-07-16','2021-03-25',80.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,1),
          (2,2,'2021-03-10','2021-02-25',160.00,true,null,null,2,1),
          (3,1,'2021-07-16','2021-01-20',80.00,true,5,'Estupendo, buen trato, repetiría',1,1),
          (4,2,'2021-10-15','2021-05-14',170.00,true,null,null,1,2),
          (5,1,'2021-11-10','2021-05-25',85.00,true,null,null,3,2),
          (6,2,'2021-12-16','2021-03-25',170.00,true,null,null,4,2),
          (7,2,'2021-04-16','2021-03-25',100.00,true,null,null,5,3),
          (8,2,'2021-04-16','2021-03-25',100.00,true,null,'Estupendo, buen trato, repetiría',2,3),
          (9,2,'2021-04-16','2021-03-25',100.00,true,4,'Me ha gustado mucho',1,3),
          (10,1,'2021-04-16','2021-03-25',160.00,true,null,null,3,4),
          (11,1,'2021-04-16','2021-03-25',160.00,true,1,'No me gusto nada',5,4),
          (12,1,'2021-04-16','2021-03-25',160.00,true,3,null,2,4),
          (13,1,'2021-04-16','2021-03-25',150.00,true,null,null,1,5),
          (14,1,'2021-04-16','2021-03-25',150.00,true,3,null,2,5),
          (15,1,'2021-04-16','2021-03-25',150.00,true,1,'Una autentica vergüenza',3,5),
          (16,1,'2021-04-16','2021-03-25',75.00,true,4,'Muy bien todo',1,6),
          (17,1,'2021-04-16','2021-03-25',75.00,true,3,'Un poco corto pero bien',5,6),
          (18,1,'2021-04-16','2021-03-25',75.00,true,null,'Alucinaaaaaaaaaante',3,6),
          (19,1,'2021-04-16','2021-03-25',60.00,true,4,'Muy bien el trato ',1,7),
          (20,1,'2021-04-16','2021-03-25',60.00,true,4,'Repetiria si o si',4,7),
          (21,1,'2021-04-16','2021-03-25',60.00,true,5,'Genial todo , muy bueno',5,7),
          (22,1,'2021-04-16','2021-03-25',35.00,true,4,'Muy bien el trato',1,8),
          (23,1,'2021-04-16','2021-03-25',35.00,true,5,'Repetiria si o si',2,8),
          (24,1,'2021-04-16','2021-03-25',35.00,true,null,'Una autentica vergüenza',3,8),
          (25,1,'2021-04-16','2021-03-25',25.00,true,4,'Ha estado genial',5,9),
          (26,2,'2021-04-16','2021-03-25',50.00,true,3,'Una autentica vergüenza',1,9),
          (27,1,'2021-04-16','2021-03-25',25.00,true,4,'Ha estado genial',4,9),
          (28,1,'2021-04-16','2021-03-25',42.00,true,4,'Ha estado genial',1,10),
          (29,1,'2021-04-16','2021-03-25',42.00,true,5,'Ha estado genial',2,10),
          (30,1,'2021-04-16','2021-03-25',42.00,true,5,'Ha estado genial',4,10),
          (31,1,'2021-04-16','2021-03-25',30.00,true,1,'Una autentica vergüenza',4,11),
          (32,1,'2021-04-16','2021-03-25',30.00,true,2,'Una autentica vergüenza',2,11),
          (33,1,'2021-04-16','2021-03-25',30.00,true,2,'Una autentica vergüenza',1,11),
          (34,1,'2021-04-16','2021-03-25',35.00,true,4,'Ha estado genial',1,12),
          (35,1,'2021-04-16','2021-03-25',35.00,true,null,'Repetiria si o si',5,12),
          (36,1,'2021-04-16','2021-03-25',35.00,true,2,'Una autentica vergüenza',3,12),
          (37,1,'2021-04-16','2021-03-25',60.00,true,2,'Una autentica vergüenza',4,13),
          (38,1,'2021-04-16','2021-03-25',60.00,true,1,'Una autentica vergüenza',2,13),
          (39,1,'2021-04-16','2021-03-25',60.00,true,3,'Ha estado genial',5,13),
          (40,1,'2021-04-16','2021-03-25',40.00,true,null,'Una autentica vergüenza',4,14),
          (41,1,'2021-04-16','2021-03-25',40.00,true,1,'Una autentica vergüenza',2,14),
          (42,1,'2021-04-16','2021-03-25',40.00,true,3,'Ha estado genial',5,14),
          (43,1,'2021-04-16','2021-03-25',20.00,true,4,'Muy bien todo',1,15),
          (44,1,'2021-04-16','2021-03-25',20.00,true,3,'Un poco corto pero bien',5,15),
          (45,1,'2021-04-16','2021-03-25',20.00,true,5,'Alucinaaaaaaaaaante',3,15),
          (46,1,'2021-04-16','2021-03-25',108.00,true,null,'Ha estado genial',1,16),
          (47,1,'2021-04-16','2021-03-25',108.00,true,5,'Repetiria si o si',5,16),
          (48,1,'2021-04-16','2021-03-25',108.00,true,2,'Una autentica vergüenza',3,16),
          (49,1,'2021-04-16','2021-03-25',134.00,true,4,null,1,17),
          (50,1,'2021-04-16','2021-03-25',134.00,true,3,null,2,17),
          (51,1,'2021-04-16','2021-03-25',134.00,true,1,'Una autentica vergüenza',3,17),
          (52,1,'2021-04-16','2021-03-25',60.00,true,4,'Ha estado genial',1,18),
          (53,1,'2021-04-16','2021-03-25',60.00,true,5,'Repetiria si o si',5,18),
          (54,1,'2021-04-16','2021-03-25',60.00,true,2,'Una autentica vergüenza',3,18),
          (55,1,'2021-07-16','2021-03-25',148.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,19),
          (56,2,'2021-03-10','2021-02-25',296.00,true,2,null,2,19),
          (57,1,'2021-07-16','2021-01-20',148.00,true,5,'Estupendo, buen trato, repetiría',1,19),
          (58,1,'2021-04-16','2021-03-25',41.00,true,4,'Muy bien todo',1,20),
          (59,1,'2021-04-16','2021-03-25',41.00,true,3,'Un poco corto pero bien',5,20),
          (60,1,'2021-04-16','2021-03-25',41.00,true,5,'Alucinaaaaaaaaaante',3,20),
          (61,1,'2021-04-16','2021-03-25',20.00,true,4,'Muy bien todo',1,21),
          (62,1,'2021-04-16','2021-03-25',20.00,true,3,'Un poco corto pero bien',5,21),
          (63,1,'2021-04-16','2021-03-25',20.00,true,5,'Alucinaaaaaaaaaante',3,21),
          (64,1,'2021-07-16','2021-03-25',22.50,true,4,'Muy divertido, me lo pase genial, repetiria.',3,22),
          (65,1,'2021-03-10','2021-02-25',22.50,true,2,null,2,22),
          (66,1,'2021-07-16','2021-01-20',22.50,true,5,'Estupendo, buen trato, repetiría',1,22),
          (67,1,'2021-04-16','2021-03-25',36.00,true,4,'Muy bien todo',1,23),
          (68,1,'2021-04-16','2021-03-25',36.00,true,3,'Un poco corto pero bien',5,23),
          (69,1,'2021-04-16','2021-03-25',36.00,true,5,'Alucinaaaaaaaaaante',3,23),
          (70,1,'2021-04-16','2021-03-25',18.00,true,1,'Una autentica vergüenza',4,24),
          (71,1,'2021-04-16','2021-03-25',18.00,true,2,'Una autentica vergüenza',2,24),
          (72,1,'2021-04-16','2021-03-25',18.00,true,2,'Una autentica vergüenza',1,24),
          (73,1,'2021-04-16','2021-03-25',65.00,true,4,'Muy bien todo',1,25),
          (74,1,'2021-04-16','2021-03-25',65.00,true,3,'Un poco corto pero bien',5,25),
          (75,1,'2021-04-16','2021-03-25',65.00,true,5,'Alucinaaaaaaaaaante',3,25),


          (76,1,'2021-07-16','2021-03-25',179.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,26),
          (77,1,'2021-03-10','2021-02-25',179.00,true,2,null,2,26),
          (78,1,'2021-07-16','2021-01-20',179.00,true,5,'Estupendo, buen trato, repetiría',1,26),

          (79,1,'2021-07-16','2021-03-25',179.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,27),
          (80,1,'2021-03-10','2021-02-25',179.00,true,2,null,2,27),
          (81,1,'2021-07-16','2021-01-20',179.00,true,5,'Estupendo, buen trato, repetiría',1,27),
          
          (82,1,'2021-07-16','2021-03-25',249.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,28),
          (83,1,'2021-03-10','2021-02-25',249.00,true,2,null,2,28),
          (84,1,'2021-07-16','2021-01-20',249.00,true,5,'Estupendo, buen trato, repetiría',1,28),

          (85,1,'2021-04-16','2021-03-25',119.00,true,1,'Una autentica vergüenza',4,29),
          (86,1,'2021-04-16','2021-03-25',119.00,true,2,'Una autentica vergüenza',2,29),
          (87,1,'2021-04-16','2021-03-25',119.00,true,2,'Una autentica vergüenza',1,29),

          (88,1,'2021-07-16','2021-03-25',49.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,30),
          (89,1,'2021-03-10','2021-02-25',49.00,true,2,null,2,30),
          (90,1,'2021-07-16','2021-01-20',49.00,true,5,'Estupendo, buen trato, repetiría',1,30),

          (91,1,'2021-07-16','2021-03-25',49.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,31),
          (92,1,'2021-03-10','2021-02-25',49.00,true,2,null,2,31),
          (93,1,'2021-07-16','2021-01-20',49.00,true,5,'Estupendo, buen trato, repetiría',1,31),


          (94,1,'2021-04-16','2021-03-25',880.00,true,4,null,1,32),
          (95,1,'2021-04-16','2021-03-25',880.00,true,3,null,2,32),
          (96,1,'2021-04-16','2021-03-25',880.00,true,1,'El precio es una burrada',3,32),


          (97,1,'2021-07-16','2021-03-25',230.00,true,4,'Muy divertido, me lo pase genial, repetiria.',3,33),
          (98,1,'2021-03-10','2021-02-25',230.00,true,2,null,2,33),
          (99,1,'2021-07-16','2021-01-20',230.00,true,5,'Estupendo, buen trato, repetiría',1,33),

          (100,1,'2021-04-16','2021-03-25',110.00,true,null,'Ha estado genial',1,34),
          (101,1,'2021-04-16','2021-03-25',110.00,true,5,'Repetiria si o si',5,34),
          (102,1,'2021-04-16','2021-03-25',110.00,true,2,'Una autentica vergüenza',3,34),

          (103,1,'2021-04-16','2021-03-25',120.00,true,4,null,1,35),
          (104,1,'2021-04-16','2021-03-25',120.00,true,3,null,2,35),
          (105,1,'2021-04-16','2021-03-25',120.00,true,1,null,3,35);
          

      `);

        console.log('Reservas insertadas');
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) connection.release();
        process.exit(0);
    }
};

initDB();
