function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function sqlDateFormat(date) {
    const sqlFormat = date.split('/').reverse().join('-');
    return sqlFormat;
}

export { onlyUnique,sqlDateFormat };