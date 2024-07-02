const express = require('express');
const bodyParser=require('body-parser');

// const { City }=require('./models/index'); --> Not doing this cuz we should maintain different folder for logic and functions
// const CityRepository=require('./repository/city-repository')

const {PORT}=require('./config/serverConfig'); //we directly didn't do this cuz index.js is main loading page and we don't want to populate it with all .env config
const ApiRoutes=require('./routes/index');

const setupAndStartServer=async ()=> {
    
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server Started at port ${PORT}`);
        // console.log(City);
        // const repoObj=new CityRepository();
        // repoObj.createCity({name: "New Delhi"}); --> if we want to change name to cityName then we have to destructure it with same name there
        // repoObj.deleteCity(1)
    });
}

setupAndStartServer();