const router=require("express").Router();
const clothesGetControllers=require('../../controllers/clothes/get')

router.get("/:articleSlug", clothesGetControllers.getSpecificArticle);
router.get("/:articleId/:colorId", clothesGetControllers.getSpecificArticleByColor);

router.get("/men/all", clothesGetControllers.getAll)

// //Men
// router.get("/hommes/all", clothesGetControllers.getAllMen)
// router.get("/hommes/:category:", clothesGetControllers.getCategoryMen)


// //Women
// router.get("/femmes/all", clothesGetControllers.getAllWomen)
// router.get("/femmes/:category:", clothesGetControllers.getCategoryWomen)


// //Children
// router.get("/enfants/all", clothesGetControllers.getAllChildren)
// router.get("/enfants/:category:", clothesGetControllers.getCategoryChildren)


// // router.get("/select", ) //For search


module.exports=router;
