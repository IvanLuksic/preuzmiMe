const {sequelize} = require('../models');
const encrypt = require('./encrypt');
const { QueryTypes } = require('sequelize');
const generatelink = require('./generatelink');

module.exports = class upload{
 
    constructor(fileProperties,logger){
        
        this.fileProperties = fileProperties,
        this.logger = logger

    }

    async saveFileParameters(type,path, timeUploaded, timeExpires,password,dlNumber) {
        
        try {

            //Poziva funkciju za generiranje linka
            const link = generatelink();
            this.logger.info("Link je preuzmi.me/", link);

            //Poziv funkcije koja enkriptira poslanu šifru
            const passwordEncrypted = encrypt(password);

            try {
                
                if(!linkSearch){
                    
                    let fileInfo = await this.FileProperties.create({
                        link: link,


                    })
                
                }else{

                    this.logger.info()

                }
                this.logger.info('File parameters have been saved');
            
            } catch (error) {
                
                this.logger.error('Error in saving file parameters to database');
                throw(error)
            
            }
   
        } catch (error) {
           
            this.logger.error('Error in saving file parameters');
            throw(error);

        }

    }

}