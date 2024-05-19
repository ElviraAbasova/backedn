const express = require("express")
const router = express.Router()
const UserController = require("./../controllers/userControllers")
router.get("/users",UserController.getAllUser)
router.get("/users/:id",UserController.getUserById)
router.post("/users",UserController.postUser)
router.delete("/users/:id",UserController.deletUserById)
router.patch("/users/:id",UserController.patchUserById)
router.put("/users/:id",UserController.putUserById)




module.exports = router
