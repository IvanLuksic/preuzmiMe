const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');

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

            }else if(linkExistance && (linkExistance.time_expires < new Date() || (linkExistance.num_dl_left && linkExistance.num_dl_left <= 0))){

                this.logger.info("The link has expired or has been downloaded too many times")
                deleteFile(link);

            }else if(linkExistance.num_dl_left && !linkExistance.pasword && linkExistance.num_dl_left > 0) {

                this.download(link);
                updateDlNum();

            } else if(linkExistance.pasword) {

               let passwordCandidate = requestPassword()
               
               

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
            throw(error)
        }
        


    }
}    