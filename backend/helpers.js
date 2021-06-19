const { format } = require('date-fns');
const sharp = require('sharp');
const uuid = require('uuid');
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');
const { ensureDir, unlink } = require('fs-extra');
const path = require('path');

const { UPLOADS_EXP } = process.env;
const uploadsDir = path.join(__dirname, UPLOADS_EXP);
sgMail.setApiKey(process.env.SG_API_KEY);

function formatDate(date) {
    return format(date, 'yyyy-MM-dd HH:mm:ss');
}

function getRandomValue(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

async function savePhoto(image) {
    await ensureDir(uploadsDir);
    const sharpImage = sharp(image.data);
    const imageInfo = await sharpImage.metadata();
    const IMAGE_MAX_WIDTH = 1000;
    if (imageInfo.width > IMAGE_MAX_WIDTH) {
        sharpImage.resize(IMAGE_MAX_WIDTH);
    }
    const savedImageName = `${uuid.v4()}.jpg`;
    const imagePath = path.join(uploadsDir, savedImageName);
    await sharpImage.toFile(imagePath);
    return savedImageName;
}

async function deletePhoto(photoName) {
    const photoPath = path.join(uploadsDir, photoName);
    await unlink(photoPath);
}

function generateRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
}

async function sendMail({ to, subject, body }) {
    try {
        const msg = {
            to,
            from: process.env.SENDGRID_FROM,
            subject,
            text: body,
            html: `
                <div>
                    <h1>${subject}</h1>
                    <p>${body}</p>
                </div>
            `,
        };

        await sgMail.send(msg);
    } catch (error) {
        throw new Error('Error enviando email');
    }
}

async function validate(schema, data) {
    try {
        await schema.validateAsync(data);
    } catch (error) {
        error.httpStatus = 400;
        throw error;
    }
}

module.exports = {
    formatDate,
    getRandomValue,
    savePhoto,
    deletePhoto,
    generateRandomString,
    sendMail,
    validate,
};
