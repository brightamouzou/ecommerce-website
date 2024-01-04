const router=require("express").Router()
const userCheckControllers=require("../../controllers/user/checkingControllers")

router.post("/",userCheckControllers.simpleCheck);

module.exports=router