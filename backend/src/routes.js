const express = require('express');
const CarController = require('./app/controllers/CarController');

const routes = express.Router();

routes.get('/', (req,res)=>{
    res.status(200).send({message:"Bem-vindo ao back-end do ShoppingCar!"});
});

routes.get('/cars',CarController.index);
routes.post('/cars',CarController.store);

module.exports = routes;