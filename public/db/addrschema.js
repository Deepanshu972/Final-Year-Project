//address
const mongoose = require("mongoose");

const addrSchema = new mongoose.Schema({
	email : {
		   type:String,
		   required:true
	}, 
	name: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	locality: {
		type: String,
		required: true
	},
	pincode: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	landmark: {
		type: String,
		default: null
	},
	alt_phone: {
		type: Number,
	}
})

const Address = new mongoose.model("address", addrSchema);
module.exports = Address;