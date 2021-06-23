const Joi = require('joi');

const newSchemaComment = Joi.object().keys({
    comment: Joi.string()
        .required()
        .min(15)
        .max(600)
        .error((errors) => {
            switch (errors[0].code) {
                case 'any.required':
                    return new Error(
                        'El campo comentario no puede estar vacio'
                    );
                case 'string.max':
                    return new Error(
                        'El campo comentario no contener más de 600 caracteres'
                    );
                case 'string.min':
                    return new Error(
                        'El campo comentario no puede contener menos de 15 caracteres'
                    );

                default:
                    return new Error(
                        'El campo comentario no puede estar vacio'
                    );
            }
        }),
});

module.exports = { newSchemaComment };
