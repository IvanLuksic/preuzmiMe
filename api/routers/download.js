const express = require('express');
const download = express.Router();
const downloadController =require('../controllers/downloadController');

module.exports = function (router){
    
    router.use('/', download);
    download.post('/:unique_URL', downloadController.download);

}