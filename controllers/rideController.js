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
    },
    //get image URLS
    async getRideImageUrl(req,res){
        try{
            const ride = await Ride.find({}).select('imageUrl');
            res.send(ride)
        }catch(error){
            res.status(500).send({
                error:'An error occured getting the image url'
            })
        }
    },
    //add ride
    async postRide(req,res){
        try{
            const ride = await Ride.create(req.body)
            res.send(ride);
        }catch (error){
            console.log(error);
            res.status(500).send({
                error: 'An error occured adding a ride'
            })
        }
    },
    //update ride
    async updateRide(req,res){
        try{
            const ride = await Ride.findOneAndUpdate({_id: req.params.id},req.body, {new:true})
            res.send(ride)
        }catch(error){
            console.log(error);
            res.status(500).send({
                error:'An error occured trying to edit ride'
            })
        }
    },
    //delete ride
    async deleteRide(req,res){
        try{
            const ride = await Ride.findByIdAndDelete([{_id: req.params.id}])
            res.send('Ride deleted: ' + ride)
        }catch(error){
            console.log(error);
            res.status(500).send({
                error: 'An error occured deleting the ride'
            })
        }
    }    
}