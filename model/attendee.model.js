const mongoose = require('mongoose');

const attendeeData = new mongoose.Schema(
	{
		emp_num:  { type: String, required: true, unique: true},
        name: { type: String, required: true },
		surname: { type: String, required: true },
		email: { type: String, required: true,},
		password: { type: String, required: true },
		bio: { type: String },
        pic: { type: String },
        birthday:{ type: String, required: true },
        position: { type: String, required: true },
        phone:{ type: String, required: true }
	},
	{ collection: 'attendees' }
)

const model = mongoose.model('Attendees', attendeeData)

module.exports = model