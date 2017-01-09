var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cloudinary = require('cloudinary');
var fs = require('fs');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({
    uploadDir: './uploads'
});

cloudinary.config({
    cloud_name: 'do5zrocew',
    api_key: '176984263871615',
    api_secret: '-4H2VvXsGsXn3O8zPU1HenjCZm8'
});

router.post('/save', multipartyMiddleware, function(req, res){
    console.log("It is post save!");
    var file = req.files.file;
    console.log(file.name);
    console.log(file.type);
    console.log(file)
    cloudinary.uploader.upload(file.path, function(result){
        console.log(result);
    
    });
    res.send(file.path);
});

router.get('/get-all', function(req, res){
    res.send('sending');
});

module.exports = router;