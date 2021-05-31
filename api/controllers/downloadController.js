const {logger} = require('../../loaders/logger');


module.exports = {

    download: async(req,res,next) => {

        logger.info("Pozvana dl funkcija")

        return res.json(req.params.unique_URL)
    }
}