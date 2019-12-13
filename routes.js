const RideController = require('./controllers/rideController')
module.exports = (app) => {
    //get all rides
    app.get('/rides', RideController.getAllRides)
    //get specific ride
    app.get('/rides/:id', RideController.getSpecificRide)
}
