const Ride = require('../models/rideModel');

module.exports = {
    //get all rides
    async getAllRides(req,res){
        try {
            const allRides = await Ride.find()
            res.send(allRides)
        }catch (error){
            res.status(500).send({
                error:'An error occured getting the rides'
            })
        }
    },
    //get specific ride
    async getSpecificRide(req,res){
        try{
            const ride = await Ride.findById([{_id: req.params.id}])
            res.send(ride)
        }catch(error){
            res.status(500).send({
                error:'An error occured getting the ride info'
            })
        }
    }
}