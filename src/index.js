const express = require('express');
const bodyParser=require('body-parser');
// const { City }=require('./models/index'); --> Not doing this cuz we should maintain different folder for logic and functions
const CityRepository=require('./repository/city-repository')

const {PORT}=require('./config/serverConfig'); //we directly did do this cuz index.js is main loading page and we don't want to populate it with all .env config

const setupAndStartServer=async ()=> {
    
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, async ()=>{
        console.log(`Server Started at port ${PORT}`);
        // console.log(City);
        const repoObj=new CityRepository();
        // repoObj.createCity({name: "New Delhi"});
        // repoObj.deleteCity(1)
    });
}

setupAndStartServer();