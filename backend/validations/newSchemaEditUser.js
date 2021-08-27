'use strict';

const Joi = require('joi');

const newSchemaEditUser = Joi.object().keys({
    email: Joi.string()
        .email()
        .error((error) => {
            switch (error[0].code) {
                case 'any.required':
                    return new Error('Se requiere un email.');
                default:
                    return new Error('El email no es válido.');
            }
        }),
    cp: Joi.number()
        .integer()
        .error((error) => {
            switch (error[0].code) {
                case 'any.required':
                    return new Error('Se requiere un código postal.');
                case 'number.base':
                    return new Error('Sólo números enteros permitidos.');
                default:
                    return new Error('El código postal no es válido.');
            }
        }),
    address: Joi.string().error((error) => {
        switch (error[0].code) {
            case 'any.required':
                return new Error('Se requiere una dirección.');
            default:
                return new Error('La dirección no es válida.');
        }
    }),
    bio: Joi.string().error((error) => {
        switch (error[0].code) {
            case 'any.required':
                return new Error('Se requiere una biografía.');
            default:
                return new Error('La biografía no es válida.');
        }
    }),
    phone: Joi.number()
        .integer()
        .error((error) => {
            switch (error[0].code) {
                case 'number.base':
                    return new Error('El teléfono solo debe contener números.');
                default:
                    return new Error('El teléfono no es válido.');
            }
        }),
});

module.exports = { newSchemaEditUser };
