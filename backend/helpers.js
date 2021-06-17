'use strict';
const { format } = require('date-fns');

// Formatear un objeto fecha al formato DATETIME de SQL.
function formatDate(date) {
    return format(date, 'yyyy-MM-dd HH:mm:ss');
}
module.exports = { formatDate };
