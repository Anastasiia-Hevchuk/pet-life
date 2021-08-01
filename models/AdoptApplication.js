const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
   nameOwner:  {type: String, required: true},
   phoneNumber: {type: String, required: true},
   descriptionOwner: {type: String, required: true},
   owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('AdoptApplication', schema);