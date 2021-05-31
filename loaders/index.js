const {SequelizeDBConnection} = require('./sequelize');
const {http,logger} = require('./logger');
const express = require('./express');

//Index file iz kojeg se pozivaju drugi loaderi

module.exports = {

    callLoaders: async function(app){
        try {
            
            await SequelizeDBConnection(logger);
            logger.info("SequelizeDBConnection has been loaded");
            
            await express(app,http);
            logger.info("Express has been loaded");

        } catch (error) {
            
            //Ispis errora i throwanje errora u datoteci koja poziva ovaj modul
            logger.error("Error in calling loaders");
            
            throw(new Error())
        }

    }

}