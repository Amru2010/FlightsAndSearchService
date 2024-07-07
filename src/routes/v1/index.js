const express=require('express');
const cityController=require('../../controllers/city-controller');
const airportController=require('../../controllers/airport-controller');

const router=express.Router();

router.post("/city",cityController.create); //for api/v1/city
router.delete("/city/:id",cityController.destroy);
router.get("/city/:id",cityController.get);
router.get("/city",cityController.getAll);
router.patch("/city/:id",cityController.update);

router.post("/airport",airportController.create); //for api/v1/airport
router.delete("/airport/:id",airportController.destroy);
router.get("/airport/:id",airportController.get);
router.get("/airport",airportController.getAll);
router.patch("/airport/:id",airportController.update);

module.exports=router;