const router=require("express").Router();
const getBySexControllers=require('../../controllers/getBySex/index')
router.get("/all/:category", getBySexControllers.getFromCategoryAndSex("all"));
router.get("/men/:category", getBySexControllers.getFromCategoryAndSex("men"));
router.get("/women/:category",getBySexControllers.getFromCategoryAndSex("women"))
router.get("/children/:category", getBySexControllers.getFromCategoryAndSex("children"));

module.exports=router;