const {logger} = require('../../loaders/logger');
const uploadClassInstance = require('../../services');


module.exports = {

    upload: async (req,res,next) => {

        try {
            
            let link = await uploadClassInstance.saveFileParameters(req.file.type, req.file.path, req.body.timeUploaded, req.body.timeExpires, req.body.password, req.body.dlNumber, req.session.userId)

            res.json(link);

        } catch (error) {
            
            logger.error('Error in upload controller');
            next(error);

        }
    
    }
    
}