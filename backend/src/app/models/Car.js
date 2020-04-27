const mongoose = require('../../database');

const CarSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    url:{
        type:String,
        require: true,
    },
},{
    timestamps: true
});

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;