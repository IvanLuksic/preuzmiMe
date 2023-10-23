const {sequelize} = require('../models');
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const deleteFile = require('./delete');

module.exports = class download{
 
    constructor(fileProperties,logger){
        
        this.FileProperties = fileProperties,
        this.logger = logger

    }

    async checkForProperties(link, suppliedPass){

        try {

            this.logger.warn(suppliedPass)
            
            const linkExistance = await this.FileProperties.findOne({
                where: {link: link}
            });

            //Ako postoji link provjeravamo jel broj preostalih preuzimanja veći od 0 i je li link istekao
            //Ako su zadovoljeni uvjeti tražimo password ili pokrećemo preuzimanje

            if(!linkExistance){
                
                this.logger.info("That link doesn't exist");
                return 1;

            }else if(linkExistance && (linkExistance.time_expires < new Date() || (linkExistance.num_dl_left != null && linkExistance.num_dl_left <= 0))){

                this.logger.info("The link has expired or has been downloaded too many times")
                deleteFile(link);
                return 2; 

            }else if(linkExistance.num_dl_left && !linkExistance.password && linkExistance.num_dl_left > 0) {

                this.updateDlNum(linkExistance.link, linkExistance.num_dl_left - 1);

                let fileInfo = {path: linkExistance.path, type: linkExistance.type};

                return fileInfo;
                        
            } else if(linkExistance.password && suppliedPass != null) {

                this.logger.warn(typeof(suppliedPass))
                
                let isCorrect = this.checkPassword(linkExistance.password, suppliedPass)
                
                if(isCorrect){
                    
                    this.updateDlNum(linkExistance.link, linkExistance.num_dl_left - 1);

                    let fileInfo = {path: linkExistance.path, type: linkExistance.type};

                    return fileInfo;
               } else {
                    return {error: 1}
               }
               
               

            } else if(linkExistance.password && !suppliedPass){

                return {error: 1}

            }else {

                this.logger.info("Nije nista u downloadu " + linkExistance.num_dl_left)

            }


        } catch (error) {
            
            this.logger.error("Error in checking for properties");
            throw(error)

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

    async checkPassword(filePass, password){

        try {
            
            bcrypt.compare(password, filePass, (err, result) => {
                if (err) {
                  // Handle error
                  console.error('Error comparing passwords:', err);
                } else if (result) {
                  // Passwords match
                  console.log('Password is correct');
                  return true
                } else {
                  // Passwords do not match
                  console.log('Password is incorrect');
                  return false
                }
              });

        } catch (error) {
            
            this.logger.error("Error in checking for password" + filePass + " " + password);
            throw(error)

        }


    }
}    