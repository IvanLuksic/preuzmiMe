
const express = require('express');
const upload = express.Router();
const uploadController =require('../controllers/uploadController');
const {uploadFile} = require('../../services/multer');

module.exports = function (router){
    
    router.use('/', upload);
    upload.post('/upload', uploadFile.single('file'), uploadController.upload);

}