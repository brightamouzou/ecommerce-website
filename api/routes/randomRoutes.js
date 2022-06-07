const router=require("express").Router();
const randomControllers=require('../controllers/randomRoutes');
// router.get("/hello",(req,res)=>{
//     console.log('hello');
// })

router.get("/1", randomControllers.interceptionFuntion("3"));
module.exports=router;



