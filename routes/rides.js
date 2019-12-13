const router = require('express').Router();
const Ride = require('../models/rideModel');

//get Rides
router.route('/').get((req,res)=>{
    Ride.find()
    .then(rides => res.json(rides))
    .catch(err => res.status(400).json('Error: ' + err));
});
//Add rides
router.route('/add').post((req,res) => {
    const name = req.body.name;
    const location = req.body.location;
    const link = req.body.link;
    const information = req.body.information;
    const image = req.body.image;
    const hiddenMickey = Boolean(req.body.hiddenMickey);
    const fastPass = Boolean(req.body.fastPass);

    const newRide = new Ride({
        name,location,link,information,image,hiddenMickey,fastPass
    });

    newRide.save()
    .then(() => res.json('Ride added'))
    .catch(err=> res.status(400).json('Error: ' + err))
});
//get specific Ride
router.route('/:id').get((req,res) => {
    Ride.findById(req.params.id)
    .then(ride => res.json(ride))
    .catch(err => res.status(400).json('Error: ' + err));
});
//update Ride
router.route('/update/:id').post((req,res)=> {
    Ride.findById(req.params.id)
    .then(ride => {
        ride.name = req.body.name;
        ride.location = req.body.location;
        ride.link = req.body.link;
        ride.information = req.body.information;
        ride.image = req.body.image;
        ride.hiddenMickey = req.body.hiddenMickey;
        ride.fastPass = req.body.fastPass;

        ride.save()
        .then(()=> res.json('Ride updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error '+ err))
});
//delete Ride
router.route('/:id').delete((req,res)=>{
    Ride.findByIdAndDelete(req.params.id)
    .then(()=>req.json('Ride deleted'))
    .catch(err=> res.status(400).json('Error: ' + err));
});

module.exports = router 