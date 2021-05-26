const { config } = require('dotenv');

require('dotenv').config();

//Config za korištenje env varijabli kroz projekt
module.exports = {
    bcrypt: {
        noSaltRounds: process.env.SALT_ROUND_NUMBER
    }
}