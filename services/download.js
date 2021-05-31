const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');
const { bcrypt } = require('bcrypt');
const deleteFile = require('./delete');

module.exports = class upload{
 
    constructor(fileProperties,logger){
        
        this.FileProperties = fileProperties,
        this.logger = logger

    }

    async checkForProperties(link){

        try {
            
            const linkExistance = await this.FileProperties.findOne({
                where: {link: link}
            });

            //Ako postoji link provjeravamo jel broj preostalih preuzimanja veći od 0 i je li link istekao
            //Ako su zadovoljeni uvjeti tražimo password ili pokrećemo preuzimanje

            if(!linkExistance){
                
                this.logger.info("That link doesn't exist");
                return 1;

            }else if(linkExistance && (linkExistance.time_expires < new Date() || (linkExistance.num_dl_left && linkExistance.num_dl_left <= 0))){

                this.logger.info("The link has expired or has been downloaded too many times")
                deleteFile(link);
                return 2; 

            }else if(linkExistance.num_dl_left && !linkExistance.pasword && linkExistance.num_dl_left > 0) {

                updateDlNum(linkExistance.link, linkExistance.num_dl_left - 1);
                return 3//this.download(link);
                        
            } else if(linkExistance.pasword) {
 
               return 4 //let passwordCandidate = requestPassword()

            }


        } catch (error) {
            
            this.logger.error("Error in checking for properties");
            throw(error)

        }

    }

    async download(link){

        try {
            
            const fileToDl = await this.FileProperties.findOne({
            where: {link: link}
            });

            let fileInfo = {path: fileToDl.path, type: fileToDl.type};

            return fileInfo;

        } catch (error) {
            
            this.logger.error("Error in download service");
            throw(error);

        }

    }

    async updateDlNum(link,num_dl_left){

        try {
            const fileToUpdate = await this.FileProperties.update({num_dl_left: num_dl_left},{
            where: {link: link}
            });
        
            if(fileToUpdate.num_dl_left <= 0){
                deleteFile(link)
            }

        } catch (error) {
         
            this.logger.error("Error in download service");
            throw(error)

        }

    }

    async checkPassword(link, password){

        try {
            
            const fileToCheck = await this.FileProperties.findOne({
                where: {link: link}
                });

            if(bcrypt.compare(password,fileToCheck.password)){
            
                return true;
        
            } else {
                
                return false;

            }

        } catch (error) {
            
            this.logger.error("Error in checking for password");
            throw(error)

        }


    }
}    