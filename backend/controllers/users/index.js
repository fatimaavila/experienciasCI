'use strict';

const deleteUser = require('./deleteUser');
const editUser = require('./editUser');
const editUserPassword = require('./editUserPassword');
const getUser = require('./getUser');
const loginUser = require('./loginUser');
const newUser = require('./newUser');
const recoverUserPassword = require('./recoverUserPassword');
const resetUserPassword = require('./resetUserPassword');
const validateUser = require('./validateUser');

module.exports = {
    deleteUser,
    editUser,
    editUserPassword,
    getUser,
    loginUser,
    newUser,
    recoverUserPassword,
    resetUserPassword,
    validateUser,
};
