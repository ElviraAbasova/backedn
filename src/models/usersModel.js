const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
	name: {
        type: String,
        required: true,
    },
	surname: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    message: {
        type: Array,
    },
    friends: {
        type: Array,
    },
    posts: {
        type: Array,
    },
    blocked: {
        type: Array,
    }
})

module.exports = mongoose.model("User", userSchema)