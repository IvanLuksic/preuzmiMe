const {FileProperties} = require('../models');
const {logger} = require('../loaders/logger');
const fs = require('fs');

module.exports = async function(link){

    try {
        
        let fileToDelete = await FileProperties.findOne({
           where: {link: link}
        });

        //Briše datoteku iz uploads foldera
        fs.unlinkSync(fileToDelete.path)
        //Briše informacije o datoteci o iz baze podataka
        await fileToDelete.destroy();

        logger.info("File has been successfully deleted");

    } catch (error) {
        
        logger.error("Error in deleting file");
        throw(error)

    }

}