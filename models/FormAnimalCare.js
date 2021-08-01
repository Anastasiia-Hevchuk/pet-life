const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    nameGuardian: {type: String, required: true},
    lastName: {type: String, required: true},
    placeOfResidence: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    descriptionOwner: {type: String, required: true}
})

module.exports = model('FormAnimalCare', schema);