const router=require("express").Router();
const shoesGetControllers=require('../../controllers/shoes/get')


router.get("/:articleSlug", shoesGetControllers.getSpecificArticle);
router.get("/:articleId/:colorId", shoesGetControllers.getSpecificArticleByColor);
router.get("/all", shoesGetControllers.getAll)
// router.get("/men/:category:", shoesGetControllers.getCategoryMen)

// router.get("/women/all", shoesGetControllers.getAllWomen)
// router.get("/women/:category:", shoesGetControllers.getCategoryWomen)

// router.get("/children/all", shoesGetControllers.getAllChildren)
// router.get("/children/:category:", shoesGetControllers.getCategoryChildren)


// router.get("/select", ) //For search

module.exports=router;
