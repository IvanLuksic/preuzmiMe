const { config } = require('dotenv');

require('dotenv').config();

//Config za korištenje env varijabli kroz projekt
module.exports = {
    bcrypt: {
        noSaltRounds: process.env.SALT_ROUND_NUMBER
    },
    port: process.env.PORT,
    maxFileSize: 25*1024*1024, //25mb
    fileRootPath: process.env.FILE_ROOT_PATH
}