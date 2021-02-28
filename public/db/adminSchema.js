const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
    name: {
        type:  String,
        required: true,
    },
    email: {
        type:  String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile_pic:{
        type: String
    }
});

adminSchema.pre('save', async function (next) {		// file encryption code
	try {
		const hashedPassword = await bcrypt.hash(this.password,10)
		this.password = hashedPassword
		next()
	}

	catch(err) {
		next(err)
	}
})

const admin = new mongoose.model("admin", adminSchema);
module.exports = admin;