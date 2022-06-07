const router=require("express").Router();
const accessoriesGetControllers=require('../../controllers/accessories/get');

router.get("/:articleSlug", accessoriesGetControllers.getSpecificArticle);
router.get("/:articleId/:colorId", accessoriesGetControllers.getSpecificArticleByColor);

router.get("/men/all", accessoriesGetControllers.getAll)
// //Men
// router.get("/hommes/all", accessoriesGetControllers.getAllMen)
// router.get("/hommes/:category:", accessoriesGetControllers.getCategoryMen)


// //Women
// router.get("/femmes/all", accessoriesGetControllers.getAllWomen)
// router.get("/femmes/:category:", accessoriesGetControllers.getCategoryWomen)


// //Children
// router.get("/enfants/all", accessoriesGetControllers.getAllChildren)
// router.get("/enfants/:category:", accessoriesGetControllers.getCategoryChildren)


// // router.get("/select", ) //For search


module.exports=router;
