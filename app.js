
const {logger} = require('./loaders/logger');
const loaders = require('./loaders');
const config = require('./config');
const express = require('express');
var cors = require('cors');
const app = express();

async function init() {
    try {

        app.use(cors({exposedHeaders: ["Content-disposition"]}));
        
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