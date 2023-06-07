const crypto = require("crypto");

const hashToken = token => {
    return crypto.createHash('sha256').update(token.toString()).digest('hex');
};

module.exports = hashToken;