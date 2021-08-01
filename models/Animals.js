const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: String, required: true},
    breed:{type: String, required: true},
    gender:{type: String, required: true},
    size: {type: String, required: true},
    photo:{type: String, required: true},
    description: {type: String, required: true}
}, {
    collection: 'animals'
});

const Animals = mongoose.model('animals', schema);

module.exports = Animals;
