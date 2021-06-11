
const {logger} = require('./loaders/logger');
const loaders = require('./loaders');
const config = require('./config');
const express = require('express');
const app = express();

async function init() {
    try {
        
        await loaders.callLoaders(app);
       
        app.listen(config.port, () => {
            logger.info("App is listening on port " + config.port)
        })

    }
    catch (error) {

        logger.error("Error in init function");
        throw(error);

    }
}

init();