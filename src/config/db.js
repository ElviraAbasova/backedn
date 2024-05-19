
const mongoose = require("mongoose") // new

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://elviraabasova1298:123@cluster0.sdjqrbh.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0")
	.then(() => {
        console.log("Connected")
	}).catch(err=>console.log(err))