const bcrypt = require('bcrypt');
const config = require('../config');
const {logger}=require('../loaders/logger');

module.exports = async function(password){

    try {
        
        let salt = await bcrypt.genSalt(Number(config.bcrypt.noSaltRounds));
        let encryptedPassword = await bcrypt.hash(password,salt);

        logger.info("Password has been encrypted: "+ encryptedPassword);
        return encryptedPassword;

    } catch (error) {
        
        logger.error("Error in encrypting password: "+ error);
        throw(error)

    }




}