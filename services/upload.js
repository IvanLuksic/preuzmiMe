const {sequelize} = require('../models');
const encrypt = require('./encrypt');
const { QueryTypes } = require('sequelize');
const generatelink = require('./generatelink');

module.exports = class upload{
 
    constructor(fileProperties,logger){
        
        this.FileProperties = fileProperties,
        this.logger = logger

    }

    async saveFileParameters(type,path, timeUploaded, timeExpires,password,dlNumber, uploaderId) {
        
        try {

            //Poziva funkciju za generiranje linka
            const link = await generatelink();

            //Poziv funkcije koja enkriptira poslanu šifru
            let passwordEncrypted = null;

            this.logger.info(password)

            if(password != null && password != "null"){
                passwordEncrypted = await encrypt(password);
            }

            try {
                    
                let fileInfo = await this.FileProperties.create({
                    
                    link: link,
                    path: path,
                    type: type,
                    time_uploaded: timeUploaded,
                    time_expires: timeExpires,
                    password: passwordEncrypted,
                    num_dl_left: dlNumber,
                    uploader_id: uploaderId,
                    createdAt: new Date(),
                    updatedAt: new Date()

                })  

                this.logger.info('File parameters have been saved');
            
            } catch (error) {
                
                this.logger.error('Error in saving file parameters to database');
                throw(error);
            
            }
   
            return link;

        } catch (error) {
           
            this.logger.error('Error in saving file parameters');
            throw(error);

        }

    }

}