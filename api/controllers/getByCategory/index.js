const { Mongoose } = require("mongoose");
const Article = require("../../models/Article");
const Color = require("../../models/Color");
const {ERROR_MESSAGE, CUSTOM_CATEGORIES, NOT_FOUND_MESSAGE}=require("../../utils/variables");

exports.getSpecificArticle= ()=>{
    return async (req, res) => {
      
      const CUSTOM_CATEGORY_NAME=req.params.category
      if (CUSTOM_CATEGORIES.indexOf(CUSTOM_CATEGORY_NAME)==-1) {
       return res.json({ message: ERROR_MESSAGE, found: false });
      }
      try {
        // const queries=req.avalaibleQueries
        // let requestedArticles=[];
        const requestedArticle = await Article.findOne({
          slug: req.params.articleSlug,
          category: CUSTOM_CATEGORY_NAME,
        });

          if (requestedArticle){
            const currentColor=requestedArticle.colors[0]
            res.json({ item: {...requestedArticle, currentColor}, found: true });
          }
          else res.json({ message: NOT_FOUND_MESSAGE, found: false });
      } catch (e) {
        res.json({ message: ERROR_MESSAGE, found: false });
      }
      
    };
}

exports.getSpecificArticleByColor = () => {
  return async (req, res, next) => {
      const CUSTOM_CATEGORY_NAME = req.params.category;

    if (CUSTOM_CATEGORIES.indexOf(CUSTOM_CATEGORY_NAME) == -1) {
      return res.json({ message: ERROR_MESSAGE, found: false });
    }
    try {
      const { articleSlug, colorId } = req.params;
      console.log("colorId", articleSlug);
      const requestedArticle = await Article.findOne({
        slug: articleSlug,
        category: CUSTOM_CATEGORY_NAME,
      });

      // console.log("\033;article: ",requestedArticle);


      if(requestedArticle){
        const isValidColor = [...requestedArticle.colors].map(ele=>String(ele)).includes(colorId);
        console.log(isValidColor);
        if(isValidColor){
            const requestedColor=await Color.findById(colorId)
            if(requestedColor){
              const {otherViewImages,images, sex:colorSex}=requestedColor;
              console.log("yessssssss");
              return res.json({
                found: true,
                item: {
                  ...requestedArticle._doc,
                  colorObject: {
                    otherViewImages,
                    images,
                    currentColorId: colorId,
                  },
                },
              });
            }
        }else{
          return res.json({ message: NOT_FOUND_MESSAGE, found: false });

        }
      }else{
        return res.json({ message: NOT_FOUND_MESSAGE, found: false });
      }

    } catch (e) {
      console.log(e.message);
      res.json({ message: ERROR_MESSAGE, found: false });
    }
  };
};

exports.getAll = (CUSTOM_CATEGORY_NAME)=>{
  
  return async (req, res, next) => {
    if (CUSTOM_CATEGORIES.indexOf(CUSTOM_CATEGORY_NAME) == -1) {
      return res.json({ message: ERROR_MESSAGE, found: false });
    }
    try {
      const avalaibleQueries = req.areAvailableQueries;
      const requestedArticles = await Article.find({
        category: CUSTOM_CATEGORY_NAME,
        ...avalaibleQueries,
      });

      if (requestedArticles) {
        res.json({ found: true, items: requestedArticles });
      }
      res.json({ found: false, message: NOT_FOUND_MESSAGE });
    } catch (e) {
      res.json({ found: false, message: ERROR_MESSAGE });
    }
  };
}


exports.getSubCategory=()=>{
  return async (req, res)=>{
    console.log("fetch for subCategories");
    const {category:CUSTOM_CATEGORY_NAME}=req.params;
    const {subCategory:CUSTOM_SUBCATEGORY}=req.query;
    console.log(req.params);
    if (CUSTOM_CATEGORIES.indexOf(CUSTOM_CATEGORY_NAME) == -1) {
      return res.json({ message: ERROR_MESSAGE, found: false });
    }
    try{
      const avalaibleQueries = req.areAvailableQueries;
      // const subCategoriesArray= CUSTOM_SUBCATEGORIES.split("-");
      const requestedArticles = await Article.find({
        category: CUSTOM_CATEGORY_NAME,
        subCategories: CUSTOM_SUBCATEGORY,
       });
  
      if(requestedArticles){
        return res.json({found:true, items:requestedArticles})
      }
      return res.json({ found: false, message: NOT_FOUND_MESSAGE });

    }catch(e){
      console.log(e.message);
        return res.json({ found: false, message: ERROR_MESSAGE });

    }
  } 
}