const router=require("express").Router();
const sortBySexControllers=require('../../controllers/sortArticlesBySex/index')

router.get("/all",sortBySexControllers.getFromCategoryAndSex("shoes", "all"))
router.get("/men", sortBySexControllers.getFromCategoryAndSex("shoes", "men"));
router.get("/women",sortBySexControllers.getFromCategoryAndSex("shoes", "women"))
router.get("/children", sortBySexControllers.getFromCategoryAndSex("shoes", "children"));

module.exports=router;