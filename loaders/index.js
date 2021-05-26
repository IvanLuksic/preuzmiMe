const {SequelizeDBConnection} = require('./sequelize');
const {logger} = require('./logger');

//Index file iz kojeg se pozivaju drugi loaderi

module.exports = {

    loadLoaders: async function(){
        try {
            
            await SequelizeDBConnection(logger);
            logger.info("SequelizeDBConnection has been loaded");

        } catch (error) {
            
            //Ispis errora i throwanje errora u datoteci koja poziva ovaj modul
            logger.error(error);
            
            throw(new Error())
        }

    }

}