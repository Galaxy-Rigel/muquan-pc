/**
 * Created by Peter on 2017/1/5.
 */
"use strict";
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));












app.use(function(req,res){
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(port,(err)=>{
    if(err){
        throw err;
    }
    console.log('this service start at port:%d',port);
});