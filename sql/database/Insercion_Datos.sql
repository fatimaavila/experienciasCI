USE VAN_Experience;

/*
*   USUARIOS
*/
INSERT INTO users (id, username, pwd,rol, email, dni, ccc, direccion, telefono, bio, nombre, apellidos, cp) VALUES 
    (1, 'hatashi199', '123456','admin',  'alejandromf_199@hotmail.com', '90-5359970', 'DE64 7032 9119 6174 2043 34', '71 Doe Crossing Avenue', '9213721676', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Alejandro', 'Mariño', null),
    (2, 'vaszm', '123456','admin',  'vaszm1996@gmail.com', '12-5950886', 'LI23 7479 62SC RO3M FPZW M', '52 Raven Park', '1647303010', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Vicente', 'Aleixandre', '3246'),
    (3, 'nachors', '123456','admin', 'nachorsanz@gmail.com', '62-6494739', 'IE46 BCHL 2574 9664 4665 62', '7029 Grasskamp Point', '2798027245', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Nacho', 'Rodriguez', null),
    (4, 'vmcauliffe3', 'g9sOAz7','regular', 'vmcauliffe3@theatlantic.com', '45-5250411', 'BH74 XBKG LIJO O5GO 3BFG 0P', '7 Jay Court', '1776315145', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Vanny', 'McAuliffe', '89129'),
    (5, 'mdwyer4', 'aw075qnKQ', 'regular','mdwyer4@toplist.cz', '43-9499743', 'CH05 6034 2YHC 7LUB IXW7 A', '48023 Melby Road', '2301555176', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Modestine', 'Dwyer', '4824'),
    (6, 'pbutterwick5', '0YkTEoPZc8T','regular', 'pbutterwick5@timesonline.co.uk', '43-7947902', 'IS37 0372 6305 8813 0905 2705 83', '34236 Merry Junction', '2845627300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Pammy', 'Butterwick', '754-0894'),
    (7, 'gfroment6', 'ghHvq1oAmjLh','regular', 'gfroment6@uiuc.edu', '77-6270519', 'KW98 HLNT 1RJQ CFDB BQTD 9RAA HS60 PM', '7 Thompson Terrace', '6099807000', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Gregorius', 'Froment', null),
    (8, 'sblight7', 'lng3NtPHd9', 'regular','sblight7@telegraph.co.uk', '31-9533280', 'LI17 5856 63CK M1TE DJDK Y', '2 Dahle Street', '9414422019', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Steffane', 'Blight', null),
    (9, 'ldelagua8', '5oE1EcljgKs2','regular', 'ldelagua8@mlb.com', '00-1103095', 'SE12 0187 5570 6826 6912 7407', '0389 Maryland Circle', '4556014938', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Louis', 'Delagua', '7006'),
    (10, 'kdanbye9', '1ms0LGWoSj', 'regular','kdanbye9@businesswire.com', '37-4882062', 'FR16 6191 7097 29PD FUMU BVEW N80', '51 Warbler Plaza', '5654362362', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Karin', 'Danbye', null),
    (11, 'oweighta', 't4rEb8Yf0Ejm', 'regular','oweighta@businessweek.com', '04-9301466', 'TR21 3596 8WST 8Q1Q KPNI UBCF CU', '143 Dakota Terrace', '6646664073', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Otha', 'Weight', '86-230'),
    (12, 'wwintourb', 'O7JagSR4D', 'regular','wwintourb@sakura.ne.jp', '18-5315421', 'DE25 6122 0619 0767 6756 87', '61 Graedel Place', '7577807507', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Welch', 'Wintour', '23605'),
    (13, 'gheinshc', 'JCmxm9c5q0w', 'regular','gheinshc@boston.com', '65-2700798', 'FR68 8579 0806 46IZ NOY6 KOLM C20', '8 7th Hill', '9186200167', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Georgetta', 'Heinsh', null);



/*
*   EXPERIENCIAS
*/
INSERT INTO experiences(id, descripcion, nombre, ciudad, precio, categorias, num_participantes, disp, fecha_inicio, fecha_fin) VALUES
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
    'A coruña',50.00,'Vuelo',1,true,'2021-02-01','2021-09-30'),
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
    'Valencia',150.00,'Vuelo',2,false,'2021-10-15','2021-05-30'),
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
    'Palma de Mallorca',20.00,'Aventura',20,false,'2021-10-15','2021-05-30'),
    (16,
    'Adentraos en un spa japonés en pleno centro de Madrid: Esenzias Spa. Cuidad vuestro bienestar de una forma original y que os dejará totalmente renovados.

    Tendréis la oportunidad de entrar en su circuito onsen, en el que encontraréis cuidadas instalaciones pensadas para vuestro disfrute. Empezad a relajaros en el jacuzzi y en la sala de vapor. Activad vuestra circulación pasando por la piscina de agua fría. Descubrid un relax sin igual y eliminad toxinas en el Ofuro, una piscina de madera japonesa con agua muy caliente. Acabad en la tranquila sala de descanso en la que podréis reconfortaros con un té.

    Después os esperará un masaje para relajaros en cuerpo y mente. Podréis elegir entre un masaje relajante, descontracturante, sensitivo, de cabeza y pies o uno con técnicas orientales. Aliviaréis tensiones musculares y eliminaréis el estrés.

    ¡Elegid esta experiencia de relax diferente y especial!',
    'Circuito Onsen Spa y Masaje para dos en Esenzias',
    'Madrid', 108.00, 'Spa y Relax', 2,true,'2021-02-10','2021-05-30'),
    (17,
    'Si queréis pasar un rato relajados y disfrutar en pareja de un masaje estad atentos a esta experiencia que os proponemos. Alejaos del estrés con estos Baños Termales y Masaje Relajante en Aire Ancient Baths Barcelona.

    Dejaos llevar por el recorrido que empezará en el agua templada del tepidarium (36º), la caliente del caldarium (40º) y la fría del frigidarium (16º). Seguidamente os beneficiaréis de un baño de vapor en el Hammam y podréis sentir el roce del agua en el baño de mil chorros. Deshaceos del estrés y del cansancio y ayudaos a mejorar el sueño.

    Mientras estéis realizando el recorrido os llamarán para daros un masaje relajante. Tumbaos en la camilla y dejad que los profesionales os vayan eliminando la tensión muscular.

    Disfrutad con vuestra pareja de una sesión de relax y sentíos mejor.',
    'Baños Termales con Aromaterapia y Masaje Relajante',
    'Barcelona',134.00,'Spa y Relax',2,true,'2021-01-13','2021-11-30'),
    (18,
    '¿Buscáis alejaros de la rutina y vivir un momento de paz y tranquilidad? Entonces haced un hueco en la agenda y relajaos con un Circuito Spa en Estepona . Una experiencia ideal para desconectar y alcanzar el bienestar total de vuestro cuerpo y mente.

    Descubrid este lugar destinado al bienestar, la salud y la belleza. Dejaos llevar e iniciad el recorrido disfrutando de 3 piscinas climatizadas de agua salada donde podréis relajaros y liberar el cuerpo de todo el cansancio. A continuación podréis masajear vuestro cuerpo con las burbujas de los jacuzzis y cuidar vuestra piel, dejándola limpia y suave, en la saunas y en el hammam. Además, también tendréis acceso a las duchas de contraste e hidromasaje, perfectas para destensar la musculatura, y al recorrido de piedras.

    Aprovechad esta oportunidad para cuidar vuestro cuerpo con agua recién extraída del Mediterráneo y ya veréis qué rápido descubrís los múltiples beneficios que tiene el agua para relajar y mimar nuestro cuerpo.

    No os lo penséis más y animaos a vivir un momento de bienestar total.',
    'Circuito Spa para dos en Elba Estepona Gran Hotel 5*',
    'Málaga',60.00,'Spa y Relax',3,true,'2021-01-15','2021-10-20'),
    (19,
    'Dejad que la calma os invada con una experiencia de bienestar que os encantará. Disfrutad de un Circuito Spa con Masaje para dos en San Sebastián, Guipúzcoa y olvidaos del estrés diario.

    El Hotel Catalonia Donosti 4*, situado en un mirador natural sobre el cerro de San Bartolomé, os abre sus puertas y os invita a disfrutar de sus más de 350m2 dedicados al relax. Podréis desconectar en un espacio acogedor en el que encontraréis todo lo que necesitáis para pasar unos minutos de evasión. Desde una piscina de agua fría, una piscina de chorros, un baño de vapor, duchas de sensaciones y una zona de relax. ¡No os faltará de nada!

    Además, esta experiencia también incluye un masaje relajante con el que podréis aliviar las tensiones y salir totalmente renovados. Recargad las pilas y no penséis en nada más que en vosotros.

    El relax os está llamando. ¿Os apetece?',
    'Circuito Spa y Masaje para dos en Hotel Catalonia Donosti 4*',
    'San Sebastián',148.00,'Spa y Relax', 2,true,'2021-01-20','2021-12-20'),
    (20,
    'No te pierdas esta chocolaterapia si eres una auténtica chocoadicta. Todos los beneficios del chocolate sin ningún remordimiento en Valladolid. Y después, un relajante baño en el jacuzzi. ¡Saldrás como nueva!

    El chocolate es una sustancia estimulante por naturaleza, reactiva la circulación, relaja la musculatura y tiene unos estupendos efectos antioxidantes. Además el aroma de cacao fomenta la liberación de endorfinas, procurándonos sensaciones de placer, relajación, energía y felicidad. Por todas estas razones el chocolate se ha venido empleando en tratamientos corporales.

    Con el masaje de chocolate caliente podrás sentir todos los nutrientes del chocolate, con vitamina E y antioxidantes, eliminarás el estrés, relajarás tu cuerpo y tu mente y revitalizarás la piel dejándola suave y ligeramente perfumada.

    Y para acompañar este maravilloso tratamiento, podrás disfrutar de un relajante jacuzzi con cromoterapia y cielo estrellado, una pequeña piscina con una temperatura de 32º y chorros de agua, ideal para relajar cuerpo y mente.

    ¡Ven a mimarte! ¡Te lo mereces!',
    'Chocolaterapia y Jacuzzi',
    'Arroyo de la Encomienda',45.00,'Spa y Relax',1,true,'2021-02-02','2021-11-25'),
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
    'Granada',28.50,'Gastronomia',20,true,'2021-02-01','2021-11-30'),
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
    'OFERTA EXCLUSIVA: Visita a Fábrica Mond con Cata de Cerveza y Maridaje',
    'Sevilla',18.00,'Gastronomia',8,true,'2021-05-15','2021-08-11'),
    (25, 
    '¿Os gusta el mundo de los vinos? Os recomendamos esta experiencia de Enoturismo en Rioja Alavesa.

    Empezaréis visitando unos viñedos que se encuentran en esta comarca de Álava, amparada dentro de la D.O.Ca Rioja. Conoceréis las zonas de producción, el clima, los tipos de suelo, las variedades, etc. Os darán la posibilidad de participar en las labores que se estén realizando en el momento (vendimia, poda, plantado...). Y también os ofrecerán un almuerzo campero con el que os deleitaréis con productos de la zona.

    Posteriormente pasaréis por su bodega donde descubriréis el proceso de elaboración de sus vinos de la D.O.Ca. Rioja, la más antigua de las denominaciones españolas. En la sala de las barricas os explicarán los métodos de crianza y envejecimiento así como las diferentes categorías de vinos. Aquí también podréis participar en las labores como el pisado, descube, prensado y filtrado entre otras. Al finalizar haréis una cata de tres vinos D.O.Ca. Rioja.

    Disfrutad y sacadle el máximo provecho a esta actividad de enoturismo. ¿Preparados?',
    'Enoturismo: Visita a Viñedos y Bodega, Cata de Vinos, Almuerzo y Actividades de Vinicultura',
    'Álava',65.00,'Gastronomia',20,true,'2021-10-15','2021-05-30'),
    (26,
    'Si siempre has querido sentir la velocidad, ahora puedes hacerlo con esta experiencia. Disfruta de un día en uno de los circuitos más rápidos de España: conducir un Ferrari F430 y un Formula 2.0.

    Esta experiencia se inicia desde el box, donde realizarás una vuelta de reconocimiento con un piloto profesional. Él te dará un briefing explicativo del circuito y sus características.

    A continuación, pon a prueba tu adrenalina al volante del Ferrari F430, donde el instructor te explicará su funcionamiento y la mejor manera de disfrutar de esta experiencia. Una vez realizada la conducción con el Ferrari F430 entrarás en boxes, donde cambiarás el Ferrari por el Formula 2.0. Al igual que con el Ferrari, pisarás a fondo el acelerador para recorrer el circuito, acabando de nuevo en el box.

    En todo momento el instructor te guiará para realizar tu sueño de la forma más especial y segura.

    Podrás elegir entre los siguientes circuitos:
    - Barcelona - Circuit de Catalunya (trazado nacional): El recorrido por vuelta es de 3km
    - Huelva - Circuito de Monteblanco: El recorrido por vuelta es de 3,9 km
    - Madrid - Circuito de Jarama: El recorrido por vuelta es de 3,8km
    - Navarra - Circuito de Los Arcos (trazado completo): El recorrido por vuelta es de 3,9km
    - Valencia - Circuito Ricardo Tormo: El recorrido por vuelta es de 3,1km

    Adrenalina en estado puro en un jornada que nunca olvidarás.',
    'Ferrari F430 F1 y Formula 2.0',
    '5 Localizaciones',179.00,'Conducción',1,true,'2021-01-01','2021-08-30'),
    (27, 
    'Si siempre has querido sentir la velocidad, ahora puedes hacerlo con esta experiencia. Disfruta de un día en uno de los circuitos más rápidos de España: conducir un Ferrari F430 y un Lamborghini Gallardo.

    Esta experiencia se inicia desde el box, donde realizarás una vuelta de reconocimiento con un piloto profesional. Él te dará un briefing explicativo del circuito y sus características.

    A continuación, pon a prueba tu adrenalina al volante del Ferrari F430, donde el instructor te explicará su funcionamiento y la mejor manera de disfrutar de esta experiencia. Una vez realizada la conducción con el Ferrari F430 entrarás en boxes, donde cambiarás el Ferrari por el Lamborghini Gallardo. Al igual que con el Ferrari, pisarás a fondo el acelerador para recorrer el circuito, acabando de nuevo en el box.

    En todo momento el instructor te guiará para realizar tu sueño de la forma más especial y segura.

    Podrás elegir entre los siguientes circuitos:
    - Barcelona - Circuit de Catalunya (trazado nacional): El recorrido por vuelta es de 3km
    - Huelva - Circuito de Monteblanco: El recorrido por vuelta es de 3,9 km
    - Madrid - Circuito de Jarama: El recorrido por vuelta es de 3,8km
    - Navarra - Circuito de Los Arcos (trazado completo): El recorrido por vuelta es de 3,9km
    - Valencia - Circuito Ricardo Tormo: El recorrido por vuelta es de 3,1km

    Adrenalina en estado puro en un jornada que nunca olvidarás.', 
    'Ferrari F430 F1 y Lamborghini Gallardo ', 
    '5 Localizaciones',179.00,'Conducción',1,true,'2021-01-01','2021-08-30'),
    (28,
    '¡Conduce tres coches! Ponte a los mandos de un Ferrari, un Lamborghini y un Porsche en esta experiencia sin igual.

    Si eres un apasionado del motor y quieres vivir nuevas sensaciones, ¡No te lo pienses más! Conduce el Ferrari F430, el Lamborghini Gallardo y el Porsche Boxter y descubre, de primera mano, las sensaciones que experimentan los pilotos de Formula 1 sobre el asfalto.

    A la llegada se llevará a cabo un briefing, donde se darán unas nociones prácticas para que aprendas a manejarlos. A continuación, ¡Empieza lo realmente divertido! Conduce un Ferrari, un Lamborghini y un Porsche en circuito, pisando a fondo el acelerador y disfrutando al máximo de un sinfín de sensaciones.

    Podrás elegir entre los siguientes circuitos:
    - Barcelona - Circuit de Catalunya (trazado nacional): El recorrido por vuelta es de 3km
    - Huelva - Circuito de Monteblanco: El recorrido por vuelta es de 3,9 km
    - Madrid - Circuito de Jarama: El recorrido por vuelta es de 3,8km
    - Navarra - Circuito de Los Arcos (trazado completo): El recorrido por vuelta es de 3,9km
    - Valencia - Circuito Ricardo Tormo: El recorrido por vuelta es de 3,1km

    Adrenalina en estado puro. ¿¡Te quedarás sin probarlo!?',
    'Trío de Coches: Ferrari, Lamborghini y Porsche',
    '5 Localizaciones',249.00,'Conducción',1,true,'2021-01-01','2021-08-30'),
    (29,
    'Déjate sorprender por un día lleno de emoción y adrenalina. Disfruta de un Vuelo en Avioneta y conduce un Ferrari en Carretera por Barcelona.

    Adéntrate en el mundo de la aviación y descubre sensaciones nuevas a bordo de una avioneta. Sobrevuela lugares con mucho encanto y divisa paisajes maravillosos desde el aire. Tu aventura comenzará desde el aeropuerto de Sabadell y desde ahí pondrás rumbo a las montañas de Montserrat o hacía la costa del Maresme. ¡Tú eliges!

    También tendrás la oportunidad de pilotar un Ferrari F430 F1 por carretera. Ponte al volante de este increíble coche y siente la potencia del motor y la aceleración de 0 a 100 en 4 segundos. Descubre la sensación al conducir el coche de tus sueños y ser el centro de todas las miradas. Nota como la adrenalina recorre todo tu cuerpo. Disfruta de un emocionante paseo por las carreteras cercanas a Montmeló.

    ¿Te vas a perder vivir el día con el que todo el mundo sueña?',
    'Vuelo en Avioneta y Conducción de Ferrari en Carretera',
    'Sabadell y Montmeló (Barcelona)',119.00,'Conducción',1,true,'2021-01-01','2021-08-30'),
    (30,
    'Si te gustan las emociones fuertes y los deportes de riesgo, libera toda tu adrenalina aprendiendo a derrapar con este Curso de Drift en Madrid.

    El Drifting o drift consiste en derrapar de manera que el vehículo forme un ángulo con la dirección de movimiento. Este deporte se hizo popular a finales de la década de los 90 cuando llegaron pilotos especialmente entrenados y con coches preparados para realizar derrapes controlados a altas velocidades.

    Con esta experiencia disfrutarás de la conducción de un BMW 540 en un circuito de asfalto. Para empezar, harás una vuelta de reconocimiento con Fran Bolaños, campeón de España en categoría AM de Drift en 2012, quién te enseñará los mejores trucos y te explicará todo lo necesario para sentirte más seguro y cómodo con el vehículo. Una vez todo entendido, ya te podrás poner al volante y empezar a trazar curvas de una manera distinta y divertida.

    ¡Dale al gas! Y anímate a vivir una experiencia inolvidable llena de sensaciones fuertes.',
    'Curso de Drift en Asfalto (Madrid)', 
    'Leganés', 49.00, 'Conducción', 1, true, '2021-01-01', '2021-08-30'),
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



/*
*   RESERVAS
*/
INSERT INTO reservas (id, cantidad, fecha_reserva,fecha_compra, precio_total, estado, valoracion, id_user, id_experience) VALUES 
    (1,1,'2021-07-16','2021-03-25',108.00,true,4,4,16),
    (2,2,'2021-08-10','2021-02-25',170.00,true,4,6,1),
    (3,1,'2021-07-16','2021-01-20',179.00,true,5,4,26),
    (4,2,'2021-08-15','2021-05-14',120.00,true,3,7,7),
    (5,1,'2021-06-10','2021-05-25',179.00,false,5,9,27),
    (6,2,'2021-04-16','2021-03-25',90.00,false,4,8,20);



/*
*   COMENTARIOS
*/
/*INSERT INTO comentarios (id, comentario, fecha_coment, id_reserva) VALUES 
    (1,'Muy chulo todo , repetiré en cuanto pueda!','2021-01-23',1),
    (2,'Genial', '2021-01-26',2),
    (3,'Una pasada, pero se quedo un poco corto','2021-02-23',3),
    (4,'Estupendo, buen trato, repetiría','2021-03-23',4),
    (5,'Con ganas de repetir','2021-02-25',5),
    (6,'Muy bien todo','2021-06-12',6);*/