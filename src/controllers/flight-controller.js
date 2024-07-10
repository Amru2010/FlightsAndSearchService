const {FlightService} = require('../services/index');

const flightService=new FlightService();

const create=async (req,res)=>{
    try {
         const flight=await flightService.createFlight(req.body);
         return res.status(201).json({
            data:flight,
            success:true,
            message:'Successfully created flight',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Flight controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to create flight',
            err:error,
        });
    }
}

const getAll=async(req,res)=>{
    try {
         const response=await flightService.getAllFlightData(req.query);
         return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully fetched flights',
            err:{}
         });
    } catch (error) {
        console.log(`Something went wrong with Flight controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to fetch flights',
            err:error,
        });
    }
}

module.exports={
    create,
    getAll,
}