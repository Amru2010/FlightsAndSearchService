const {Flight} = require('../models/index');

class FlightRepository{

    async createFlight(data){
        try {
            const flight= await Flight.create(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong at airplane repository layer');
            throw{error};
        }
    }
}

module.exports=FlightRepository;