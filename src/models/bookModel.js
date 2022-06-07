const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String, 
    author_id: Number, 
    price: String,
    ratings: Number    

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
