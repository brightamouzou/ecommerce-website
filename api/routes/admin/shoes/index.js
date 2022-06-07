const router=require("express").Router();
router.get("/hommes/all", shoesGetControllers.getAll)
router.get("/hommes/:category:", shoesGetControllers.getCategory)
router.post("/", shoesPostControllers) //Post a new shoe
router.delete("/", shoeDeleteControllers) //For deleting a shoe
router.post("/:id", shoePostControllers) //Fro update



