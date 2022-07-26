const router=require("express").Router();
const getByCategoryControllers=require("../../controllers/getByCategory/index")


router.get("/slug/:category/:articleSlug", getByCategoryControllers.getSpecificArticle());
router.get("/slugandcolor/:category/:articleSlug/:colorId", getByCategoryControllers.getSpecificArticleByColor());
router.get("/price/slugandcolor/:category/:articleSlug/:colorId", getByCategoryControllers.getSpecificArticlePrice());
router.get("/all/:category", getByCategoryControllers.getAll());
router.get("/subcategory/:category", getByCategoryControllers.getSubCategory());

module.exports=router; 
