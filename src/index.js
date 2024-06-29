const express = require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig'); //we directly did do this cuz index.js is main loading page and we don't want to populate it with all .env config

const setupAndStartServer=async ()=> {
    
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    
    app.listen(PORT, ()=>{
        console.log(`Server Started at port ${PORT}`);
    });
}

setupAndStartServer();