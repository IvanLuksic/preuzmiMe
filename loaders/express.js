const { router } = require('../api');
const express = require('express');
const {logger} = require('./logger');

module.exports = (app,http) => {

    app.use(http);

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.options("/", function (req, res, next) {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.send(200);
    });

    app.use('/api', router);
    
    app.use((req, res, next) => {
        const error = new Error("Not found");
        error.status = 404;
        next(error);
    });
    
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            error: {
                message: err.message,
            },
        });
    });

}