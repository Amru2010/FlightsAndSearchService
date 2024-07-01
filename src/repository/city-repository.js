const { City }=require('../models/index'); //could have imported simply from city.js but index exports all and we can import from there that is why

class CityRepository{
    async createCity({name}){ //destructuring on the fly
        try{
            const city=await City.create({name});
            return city;
        }
        catch (err){
            throw(err);
        }
    }
    async deleteCity(cityId){ //directly sending cityId
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        }
        catch (err){
            throw(err); //incase deleting city which doesn't exist
        }
    }
}

module.exports = CityRepository;