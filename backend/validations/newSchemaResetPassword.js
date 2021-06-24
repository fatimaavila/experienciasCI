'use strict';

const Joi = require('joi');

const newSchemaResetPassword = Joi.object().keys({
        recoverCode: Joi.string()
                .required()
                .error((error) => {
                    switch(error[0].code) {
                        case 'any.required':
                            return new Error('Se requiere un código de verificación.');
                        default:
                            return new Error('El código de verificación no es válido');  
                    }
    }),
        newPassword: Joi.string()
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
    })
});

module.exports = { newSchemaResetPassword };