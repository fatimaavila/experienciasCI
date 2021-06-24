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
            html: 
            `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Correo de Validación</title>
                <link rel="stylesheet" href="https://drive.google.com/file/d/1YgsaslnqDw4PNYJMzfDpDCw4e3JUw78T/view?usp=sharing">
            </head>
            <body>
                <header>
                    <figure>
                        <img src="./LogoVAN.png" alt="logoVAN_Experience">
                    </figure>
                </header>
                <main>
                    ${subject}
                    ${body}
                </main>
                <footer>
                    <div>
                        <figure>
                            <img src="./LogoVAN.png" alt="logoVAN_Experience">
                        </figure>
                        <p>VAN_Experience · 2021 · Todos los derechos reservados.</p>
                        <ul class="footer_RRSS">
                        <li><a href="https://www.instagram.com"><img src="https://drive.google.com/file/d/1w9jomNgvAenFutVjQLtY-fQOqQasugA3/view?usp=sharing" alt="ig"></a></li>
                        <li><a href="https://www.twitter.com"><img src="https://drive.google.com/file/d/1bR56Fh7K0LD2LtAMBt_smSiT6c_wMHHo/view?usp=sharing" alt="tw"></a></li>
                        <li><a href="https://www.facebook.com"><img src="https://drive.google.com/file/d/1TA1OIczvE8RsNbQSnKncRw9yCh78MlBB/view?usp=sharing" alt="face"></a></li>
                        <li><a href="https://www.linkedin.com"><img src="https://drive.google.com/file/d/10EH-JemONmw0S6wdRT3XYR_YsR5ciY3N/view?usp=sharing" alt="linkedIn"></a></li>
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