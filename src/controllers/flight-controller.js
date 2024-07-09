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

module.exports={
    create,

}