const bcrypt = require("bcrypt");

const hashPassword = password => {
    const encPassword = bcrypt.hash(password, 10).then(hash => {
        return hash;
    });

    return encPassword;
};

module.exports = hashPassword;
