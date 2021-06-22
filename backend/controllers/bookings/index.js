'use strict';
const deleteBooking = require('./deleteBooking');
const getAllBookings = require('./getAllBookings');
const getBooking = require('./getBooking');
const newBooking = require('./newBooking');
const newComment = require('./newComment');
const newRating = require('./newRating');

module.exports = {
    deleteBooking,
    getAllBookings,
    getBooking,
    newBooking,
    newComment,
    newRating,
};
