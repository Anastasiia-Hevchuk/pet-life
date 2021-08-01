const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    nameAnimal: {type: String, required: true},
    genderAnimal: {type: String, required: true},
    city: {type: String, required: true},
    ageAnimal: {type: String, required: true},
    data: {type: String, required: true},
    photo: {type: String, required: true},
    nameOwner: {type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true, unique: true},
    owner: {type: Types.ObjectId, ref: 'User'},
    description: {type: String, required: true}, 
})

module.exports = model('Advertisement', schema);