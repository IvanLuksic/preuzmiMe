const models = require('../models');
const downloadClass = require('./download');
const uploadClass = require('./upload');
const {logger} = require('../loaders/logger');

let download = downloadClass(models.FileProperties,logger);
let upload = uploadClass(models.FileProperties,logger);

module.exports = {

    downloadClassInstance: download,
    uploadClassInstance: upload

}