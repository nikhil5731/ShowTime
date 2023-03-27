const mongoose = require('mongoose')

const cinemaSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'Please add a name']
	},
	theaters: [{ type: mongoose.Schema.ObjectId, ref: 'Theater' }]
})

module.exports = mongoose.model('Cinema', cinemaSchema)
