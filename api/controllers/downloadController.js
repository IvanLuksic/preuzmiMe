const {logger} = require('../../loaders/logger');
const {downloadClassInstance} = require('../../services');


module.exports = {

    download: async(req,res,next) => {

        
        try {
            
            let downloadResponse = await downloadClassInstance.checkForProperties(req.params.unique_URL, req.body.password);

            if(downloadResponse.path){

                return res.download('C://Users/Ivan/desktop/Projekti/preuzmiMe/'+downloadResponse.path, downloadResponse.path.substring(downloadResponse.path.indexOf('-')+1))

            }

            return res.json(downloadResponse); 
        
        } catch (error) {
        
            logger.info("Error in download controller");
            next(error);
            
        } 
    }
}