const {logger} = require('../../loaders/logger');
const {downloadClassInstance} = require('../../services');


module.exports = {

    download: async(req,res,next) => {

        
        try {
        
            let downloadResponse = await downloadClassInstance.checkForProperties(req.params.unique_URL);

            if(downloadResponse.path){

                return res.sendFile(downloadResponse.path, {root: 'C://Users/Ivan/desktop/Projekti/preuzmiMe/' })

            }

            return res.json(downloadResponse); 
        
        } catch (error) {
        
            logger.info("Error in download controller");
            next(error);
            
        } 
    }
}