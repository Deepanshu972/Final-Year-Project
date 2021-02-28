const mongoose = require("mongoose");
const addtocartSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	framemodel: {
		type: String,
		required: true
	},
	frameprice: {
		type: Number,
		required: true
	},
	handlebarmodel: {
		type: String,
		required: true
	},
	handlebarprice: {
		type: Number,
		required: true
	},
	seatmodel: {
		type: String,
		required: true
	},
	seatprice: {
		type: Number,
		required: true
	},
	cablemodel: {
		type: String,
		required: true
	},
	cableprice: {
		type: Number,
		required: true,
	},
	mudguardmodel: {
		type: String,
		required: true
	},
	mudguardprice: {
		type: Number,
		required: true
	},
	forkmodel: {
		type: String,
		required: true
	},
	forkprice: {
		type: Number,
		required: true
	},
	gearmodel: {
		type: String,
		required: true
	},
	gears: {
		type: Number,
		required: true
	},
	gearprice: {
		type: Number,
		required: true
	},
	tyremodel: {
		type: String,
		required: true
	},
	tyreprice: {
		type: Number,
		required: true
	},
	total: {
		type: Number,
		required: true
	}
})
const addtocart = new mongoose.model("addtocart", addtocartSchema);
module.exports = addtocart;