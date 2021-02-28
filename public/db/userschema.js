const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

//registration
const userSchema = new mongoose.Schema({
	name : {
	   type:String,
	   required:true
	},
	
	email : {
	   type:String,
	   required:true,
	   unique:true
	},

	password : {
	   type:String,
	   required:true
	}
})

userSchema.pre('save', async function (next) {		// file encryption code
	try {
		const hashedPassword = await bcrypt.hash(this.password,10)
		this.password = hashedPassword
		next()
	}

	catch(err) {
		next(err)
	}
})

const User = new mongoose.model("userCred",userSchema);
module.exports = User;