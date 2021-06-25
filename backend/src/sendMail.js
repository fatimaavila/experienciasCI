'use strict';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SG_API_KEY);

async function sendMail({ to, subject, body }) {
    try {
        const msg = {
            to,
            from: process.env.SENDGRID_FROM,
            subject,
            text: body,
            html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Correo de Validación</title>
            </head>
            <body>
                <main>
                    ${subject}
                    ${body}
                </main>
                <footer>
                    <div>
                        <p>VAN_Experience · 2021 · Todos los derechos reservados.</p>
                        <ul>
                            <li><a href="https://www.instagram.com">Instagram</a></li>
                            <li><a href="https://www.twitter.com">Twitter</a></li>
                            <li><a href="https://www.facebook.com">Facebook</a></li>
                            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
                        </ul>
                    </div>
                </footer>
            </body>
            </html>
            `,
        };

        await sgMail.send(msg);
    } catch (error) {
        throw new Error('Error enviando email');
    }
}

module.exports = sendMail;
