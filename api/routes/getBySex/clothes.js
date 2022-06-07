const router = require("express").Router();
const menControllers = require("../../controllers/sortArticlesBySex/men");
const womenControllers = require("../../controllers/sortArticlesBySex/women");
const childrenControllers = require("../../controllers/sortArticlesBySex/children");
const allControllers = require("../../controllers/sortArticlesBySex/all");

const sortBySexControllers=require('../../controllers/sortArticlesBySex/index')

router.get("/all",sortBySexControllers.getFromCategoryAndSex("clothes", "all"))
router.get("/men", sortBySexControllers.getFromCategoryAndSex("clothes", "men"));
router.get("/women",sortBySexControllers.getFromCategoryAndSex("clothes", "women"))
router.get("/children", sortBySexControllers.getFromCategoryAndSex("clothes", "children"));

module.exports = router;
