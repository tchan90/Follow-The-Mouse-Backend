const RideController = require('./controllers/rideController');
const FoodController = require('./controllers/foodController');
const UserController = require('./controllers/UserController');
//authorization middleware
const auth = require('./middleware/auth')
module.exports = (app) => {
    //get all rides
    app.get('/rides', RideController.getAllRides)
    //get specific ride
    app.get('/rides/:id', RideController.getSpecificRide)
    //add ride
    app.post('/addRide', RideController.postRide)
     //update ride
    app.put('/updateRide/:id', RideController.updateRide)
    //delete ride
    app.delete('/deleteRide/:id', RideController.deleteRide)
    //get image url
    app.get('/firebaseStorage_rides', RideController.getRideImageUrl)
    
    //get all food
    app.get('/restaurants', FoodController.getAllRestaurants)
    //get specific ride
    app.get('/restaurant/:id', FoodController.getSpecificRestaurant)
    //add ride
    app.post('/addRestaurant', FoodController.postRestaurant)
     //update ride
    app.put('/updateRestaurant/:id', FoodController.updateRestaurant)
    //delete ride
    app.delete('/deleteRestaurant/:id', FoodController.deleteRestaurant)
     //get image url
     app.get('/getimageUrls-food', FoodController.getImageUrlsFood)

     //authentication
     //sign in
     app.post('/signIn', UserController.loginUser)
     //register
     app.post('/register', auth, UserController.postRegister)
     //get users
     app.get('/getUsers', auth,UserController.getUsers)
     //get specific user
     app.get('/user/:id', auth, UserController.getSpecificUser)
     //delete user
     app.delete('/deleteUser/:id', auth, UserController.deleteUser)
}
