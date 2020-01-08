const Food = require('../models/foodModel');

module.exports = {
    //get all restaurants
    async getAllRestaurants(req,res){
        try {
            const allRestaurants = await Food.find()
            res.send(allRestaurants)
        }catch (error){
            res.status(500).send({
                error:'An error occured getting the restaurants'
            })
        }
    },
    //get specific restaurant
    async getSpecificRestaurant(req,res){
        try{
            const restaurant = await Food.findById([{_id: req.params.id}])
            res.send(restaurant)
        }catch(error){
            res.status(500).send({
                error:'An error occured getting the Restaurant info'
            })
        }
    },
     //get image URLS
     async getImageUrlsFood(req,res){
        try{
            const ride = await Food.find({}).select('imageUrl -_id');
            res.send(ride)
        }catch(error){
            res.status(500).send({
                error:'An error occured getting the image url'
            })
        }
    },
    //add restaurant
    async postRestaurant(req,res){
        try{
            const restaurant = await Food.create(req.body)
            res.send(restaurant);
        }catch (error){
            console.log(error);
            res.status(500).send({
                error: 'An error occured adding a Restaurant'
            })
        }
    },
    //update restaurant
    async updateRestaurant(req,res){
        try{
            const restaurant = await Food.findOneAndUpdate({_id: req.params.id},req.body, {new:true})
            res.send(restaurant)
        }catch(error){
            console.log(error);
            res.status(500).send({
                error:'An error occured trying to edit Restaurant'
            })
        }
    },
    //delete restaurant
    async deleteRestaurant(req,res){
        try{
            const restaurant = await Food.findByIdAndDelete([{_id: req.params.id}])
            res.send('Restaurant deleted: ' + restaurant)
        }catch(error){
            console.log(error);
            res.status(500).send({
                error: 'An error occured deleting the Restaurant'
            })
        }
    }
}