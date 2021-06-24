'use strict';

const Joi = require('joi');

const newUserSchema = Joi.object().keys({
    username: Joi.string()
                .required()
                .min(8)
                .max(20)
                .error((errors) => {
                    switch(errors[0].code) {
                        case 'any.required':
                            return new Error('Se requiere un usuario.');
                        case 'string.min':
                            return new Error('El nombre de usuario debe tener mínimo 8 caracteres.');
                        case 'string.max':
                            return new Error('El nombre de usuario sólo puede tener un máximo de 20 caracteres.');
                        default:
                            return new Error('El usuario no es válido.');
                    }
                }),
    email: Joi.string()
                .required()
                .email()
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere un email.');
                        default:
                            return new Error('El email no es válido.');
                    }
                }),
    password: Joi.string()
                .required()
                .alphanum()
                .min(8)
                .max(25)
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere una contraseña.');
                        case 'string.min':
                            return new Error('La contraseña debe ser mínimo de 8 caracteres.');
                        case 'string.max':
                            return new Error('La contraseña solo puede contener 20 caracteres como máximo.');
                        default:
                            return new Error('La contraseña no es válida');  
                    }
                }),
    dni: Joi.string()
                .required()
                .alphanum()
                .min(9)
                .max(9)
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere un DNI.');
                        case 'string.min':
                            return new Error('El DNI debe tener 9 caracteres alphanuméricos.');
                        case 'string.max':
                            return new Error('El DNI debe tener 9 caracteres alphanuméricos.');
                        default:
                            return new Error('La contraseña no es válida.');
                    }
                }),
    cp: Joi.number()
                .required()
                .integer()
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere un código postal.');
                        case 'number.base':
                            return new Error('Sólo números enteros permitidos.');
                        default:
                            return new Error('El código postal no es válido.')
                    }
                }),
    address: Joi.string()
                .required()
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere una dirección.');
                        default:
                            return new Error('La dirección no es válida.'); 
                    }
                }),
    bio: Joi.string()
                .required()
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere una biografía.');
                        default:
                            return new Error('La biografía no es válida.'); 
                    }
                }),
    phone: Joi.number()
                .integer()
                .error((error) => {
                    switch(error[0].code) {
                        case 'number.base':
                            return new Error('El teléfono solo debe contener números.');
                        default:
                            return new Error('El teléfono no es válido.'); 
                    }
                }),
    name: Joi.string()
                .pattern(/^[a-zA-Z]+$/)
                .error((error) => {
                    switch(error[0].code) {
                        default:
                            return new Error('El nombre no es válido.');
                    }
                }),
    last: Joi.string()
                .pattern(/^[a-zA-Z]+$/)
                .error((error) => {
                    switch(error[0].code) {
                        default:
                            return new Error('Los apellidos no son válidos.');
                    }
    }),
    ccc: Joi.string()
                .creditCard()
                .min(20)
                .max(20)
                .error((error) => {
                    switch (error[0].code) {
                        default:
                            return new Error('La tarjeta de crédito debe tener 20 caracteres');
                    }
                })
                

});

module.exports = { newUserSchema };