'use strict';
const deleteBooking = require('./deleteBooking');
const getAllBookings = require('./getAllBookings');
const getBooking = require('./getBooking');
const getCommentsRatings = require('./getCommentsRatings');
const getUserBookings = require('./getUserBookings');
const newBooking = require('./newBooking');
const newComment = require('./newComment');
const newRating = require('./newRating');
const putBookingState = require('./putBookingState');
const getFinalStateBooking = require('./getFinalStateBooking');

module.exports = {
    deleteBooking,
    getAllBookings,
    getBooking,
    getCommentsRatings,
    newBooking,
    newComment,
    newRating,
    getUserBookings,
    putBookingState,
    getFinalStateBooking,
};
