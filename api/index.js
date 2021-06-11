const uploadRouter = require('./routers/upload');
const downloadRouter = require('./routers/download');
const express = require('express');
const router = express.Router();

uploadRouter(router);
downloadRouter(router);

module.exports = {

    router: router

 }