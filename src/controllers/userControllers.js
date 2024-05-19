const User = require("./../models/usersModel")

const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        res.status(400).send(err);
    }
}
const getUserById= async(req, res) => {
	const user = await User.find({_id: req.params.id})
    res.status(200).send(user)

}

const postUser= async(req, res) => {
    const newObj = req.body
	const newUser = new User(newObj)
    newUser.save()
	res.status(200).send("posted")
}

const deletUserById= async(req, res) => {
	await User.findOneAndDelete({_id: req.params.id})
    res.status(200).send("deleted")

}
const patchUserById= async(req, res) => {
	const newUser = await User.findOneAndUpdate({_id: req.params.id}, req.body)
    res.status(200).send(newUser)

}
const putUserById= async(req, res) => {
	const newUser = await User.findOneAndReplace({_id: req.params.id}, req.body)
    res.status(200).send(newUser)

}


module.exports={getAllUser,postUser,getUserById, deletUserById,patchUserById,putUserById}