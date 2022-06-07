const router = require("express").Router();
const sortBySexControllers=require('../../controllers/sortArticlesBySex/index');

router.get("/all", sortBySexControllers.getFromCategoryAndSex("accessories", "all"));
router.get("/men", sortBySexControllers.getFromCategoryAndSex("accessories", "men"));
router.get("/women", sortBySexControllers.getFromCategoryAndSex("accessories", "women"));
router.get("/children", sortBySexControllers.getFromCategoryAndSex("accessories", "children"));

module.exports = router;
