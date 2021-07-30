const { format } = require('date-fns');
const sharp = require('sharp');
const uuid = require('uuid');
const crypto = require('crypto');
const { ensureDir, unlink } = require('fs-extra');
const path = require('path');

const { UPLOADS } = process.env;
const uploadsDir = path.join(__dirname, UPLOADS);

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

async function validate(schema, data) {
    try {
        await schema.validateAsync(data);
    } catch (error) {
        error.httpStatus = 400;
        throw error;
    }
}

const priceQuery = async (price) => {
    price = Number(price);

    switch (price) {
        case '0-50':
            return `precio BETWEEN 0 AND 50`;
        case '50-100':
            return `precio BETWEEN 51 AND 100`;
        case '100-150':
            return `precio BETWEEN 101 AND 150`;
        case '150-200':
            return `precio BETWEEN 151 AND 200`;
        case '200-':
            return `precio > 200`;
        default:
            return `precio BETWEEN 0 AND 999`;
    }
};

module.exports = {
    formatDate,
    getRandomValue,
    savePhoto,
    deletePhoto,
    generateRandomString,
    validate,
    priceQuery,
};
