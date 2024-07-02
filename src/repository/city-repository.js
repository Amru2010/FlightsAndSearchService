const { City }=require('../models/index'); //could have imported simply from city.js but index exports all and we can import from there that is why

class CityRepository{
    async createCity({name}){ //destructuring on the fly
        try{
            const city=await City.create({
                //name:name -->when you don't write key-value then same value becomes key and value
                name
            });
            return city;
        }
        catch (err){
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }

    async deleteCity(cityId){ //directly sending cityId
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }
        catch (err){
            console.log('Something went wrong at city repository layer');
            throw{err}; //incase deleting city which doesn't exist
        }
    }

    async updateCity(cityId,dataObj){
        try {
            const city= await City.update(dataObj,{
                where:{
                    id:cityId
                }
            }); 
            return city; 
        } catch (err) {
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId); //findByPk special query by sequelize for primary key
            return city;
        } catch (err) {
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }
}

module.exports = CityRepository;