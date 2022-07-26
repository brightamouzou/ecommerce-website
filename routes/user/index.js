const router = require("express").Router();
const AuthController=require("../../controllers/user/index")
const isAuth=require("../../middlewares/auth")
//Auth
router.post("/login",AuthController.login);
router.post("/signup", AuthController.signup);
router.get("/:userId", AuthController.getUser);

//Favorite
router.delete("/favorite",isAuth,AuthController.deleteFromFavorite)
router.post("/favorite/all",isAuth, AuthController.getAllFavorite);
router.post("/favorite",isAuth,AuthController.addFavorite);

//Others

module.exports=router