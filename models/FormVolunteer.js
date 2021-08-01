const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    nameVolunteer: {type: String, required: true},
    lastName: {type: String, required: true},
    placeOfResidence: {type: String, required: true, unique: true},
    phoneNumber: {type: String, required: true, unique: true},
    descriptionOwner: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('FormVolunteer', schema);