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
        .allow(null, '')
        .error((error) => {
            switch (error[0].code) {
                case 'any.required':
                    return new Error('Se requiere un código postal.');

                default:
                    return new Error('El código postal no es válido.');
            }
        }),
    address: Joi.string()
        .allow(null, '')
        .error((error) => {
            switch (error[0].code) {
                case 'any.required':
                    return new Error('Se requiere una dirección.');
                default:
                    return new Error('La dirección no es válida.');
            }
        }),
    bio: Joi.string()
        .allow(null, '')
        .error((error) => {
            switch (error[0].code) {
                case 'any.required':
                    return new Error('Se requiere una biografía.');
                default:
                    return new Error('La biografía no es válida.');
            }
        }),
    phone: Joi.number()
        .allow(null, '')
        .integer()
        .min(9)
        .error((error) => {
            switch (error[0].code) {
                case 'number.base':
                    return new Error('El teléfono solo debe contener números.');
                default:
                    return new Error('El teléfono no es válido.');
            }
        }),
    dni: Joi.string()
        .allow(null, '')
        .min(9)
        .error((error) => {
            switch (error[0].code) {
                case 'any.required':
                    return new Error('Se requiere un DNI');
                default:
                    return new Error(
                        'El DNI debe contener minimo 9 caracteres.'
                    );
            }
        }),
});

module.exports = { newSchemaEditUser };
