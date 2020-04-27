const Car = require('../models/Car');

class CarsController{
    constructor(dao){
        this.dao = dao;
    }

    index = async (req,res) =>{
        const cars = await this.dao.find();
        return res.send(cars);
    }

    store = async (req,res) =>{
        const {name, url} = req.body;
        const car = await this.dao.create({name,url});
        return res.send(car);
    }

}

module.exports = new CarsController(Car);