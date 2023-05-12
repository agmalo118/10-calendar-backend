
const dayjs = require('dayjs');

const isDate = (value, { req, location, path }) => {

    if (!value) {
        return false;
    }

    const fecha = dayjs(value);

    if (fecha.isValid()) {
        return true;
    }
    else {
        return false;
    }

}

module.exports = {
    isDate
}