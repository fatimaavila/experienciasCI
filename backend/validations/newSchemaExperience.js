const Joi = require('joi');

const newSchemaExperience = Joi.object().keys({
    description: Joi.string()
        .required()
        .min(50)
        .max(1000)
        .error((errors) => {
            switch (errors[0].code) {
                case 'any.required':
                    return new Error('La descripción no puede estar vacia');

                case 'string.min':
                    return new Error(
                        'La descripción debe tener al menos 50 caracteres'
                    );

                case 'string.max':
                    return new Error(
                        'La descripción debe tene como maximo 1000'
                    );

                default:
                    return new Error('Se requiere una descripción');
            }
        }),

    name: Joi.string()
        .required()
        .min(5)
        .max(50)
        .error((errors) => {
            console.log(errors[0]);
            switch (errors[0].code) {
                case 'any.required':
                    return new Error(
                        'El nombre debe tener entre 5 y 50 caracteres'
                    );

                case 'string.min':
                    return new Error(
                        'El nombre  debe tener al menos 5 caracteres'
                    );

                case 'string.max':
                    return new Error(
                        'El nombre debe tene como maximo 50 caracteres'
                    );

                default:
                    return new Error('Se requiere un nombre');
            }
        }),

    price: Joi.number()
        .required()
        .error((errors) => {
            switch (errors[0].code) {
                default:
                    return new Error('Precio necesario');
            }
        }),

    category: Joi.string()
        .required()
        .error((errors) => {
            switch (errors[0].code) {
                default:
                    return new Error('Es necesario introducir una categoria');
            }
        }),

    city: Joi.string()
        .required()
        .error((errors) => {
            switch (errors[0].code) {
                default:
                    return new Error('Es necesario introducir una ciudad');
            }
        }),

    participants: Joi.number()
        .integer()
        .required()
        .error((errors) => {
            switch (errors[0].code) {
                default:
                    return new Error(
                        'Es necesario introducir el numero de participantes'
                    );
            }
        }),

    dStart: Joi.date()
        .required()
        .error((errors) => {
            switch (errors[0].code) {
                default:
                    return new Error(
                        'Es necesario introducir la fecha de inicio'
                    );
            }
        }),

    dStop: Joi.date()
        .required()
        .error((errors) => {
            switch (errors[0].code) {
                default:
                    return new Error('Es necesario introducir la fecha final');
            }
        }),
});

module.exports = { newSchemaExperience };
