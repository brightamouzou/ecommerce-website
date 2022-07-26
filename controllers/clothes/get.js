const Article = require("../../models/Article");
const Color = require("../../models/Color");
const NOT_FOUND_MESSAGE="Désolé, l'article que vous demandez n'est pas été trouvé"
const ERROR_MESSAGE="Oups! Une erreur s'est produite lors du chrgement"
const CURRENT_CATEGORY_NAME="clothes";

exports.getSpecificArticle=async(req, res)=>{
  try{

    // const queries=req.avalaibleQueries
    // let requestedArticles=[];
    const requestedArticle=await Article.findOne({_id:req.params.articleSlug,category:CURRENT_CATEGORY_NAME})

    if(requestedArticle)
      res.json({item:requestedArticle,found:true})
    else
      res.json({ message: NOT_FOUND_MESSAGE, found: false });

  }
  catch(e){
      res.json({ message:ERROR_MESSAGE , found: false });

  }
    
}

exports.getSpecificArticleByColor=async (req, res, next)=>{
    try{
      const {articleSlug, colorId}=req.params
      const requestedArticle=await Article.findOne({slug:req.params.articleSlug,category:CURRENT_CATEGORY_NAME})

      if(requestedArticle){
        const colorRequested=await Color.findOne({articleId:requestedArticle._id, colorId:colorId})

        if (colorRequested){
          res.json({
            found:true,
            item:{
              ...requestedArticle, 
              color:colorRequested
            }
          })
        }
        res.json({item:requestedArticle,found:true})
      }

      else
        res.json({ message: NOT_FOUND_MESSAGE, found: false });

    }
    catch(e){
      res.json({ message:ERROR_MESSAGE , found: false });

    }
}

exports.getAll = async(req, res, next) => {
  try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, ...avalaibleQueries})
    
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})

  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }
  
};

exports.getPants = async(req, res, next) => {
   try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, subCategories:"pants",...avalaibleQueries})
  
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})

  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }
  
};

exports.getShorts = async(req, res, next) => {
   try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, subCategories:"shorts",...avalaibleQueries})
  
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})
    
  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }
  
};

exports.getSweatshirts = async(req, res, next) => {
   try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, subCategories:"sweatshirts",...avalaibleQueries})
  
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})

  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }
  
};



exports.getTshirts = async(req, res, next) => {
   try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, subCategories:"tshirts",...avalaibleQueries})
  
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})

  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }
  
};

exports.getTops = async(req, res, next) => {
   try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, subCategories:"tops",...avalaibleQueries})
  
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})

  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }

};

exports.getJerseys = async(req, res, next) => {
   try{
    const avalaibleQueries=req.areAvailableQueries;
    const requestedArticles=await Article.find({category:CURRENT_CATEGORY_NAME, subCategories:"jerseys",...avalaibleQueries})
  
    if(requestedArticles){
      res.json({found:true, items:requestedArticles})
    }
    res.json({found:false, message:NOT_FOUND_MESSAGE})

  }catch(e){
    res.json({found:false, message:ERROR_MESSAGE})
  }

};

// exports.getAllMen = (req, res, next) => {

// };

// exports.getAllWomen = (req, res, next) => {};

// exports.getCategoryWomen = (req, res, next) => {};

// exports.getAllChildren = (req, res, next) => {};

// exports.getCategoryChildren = (req, res, next) => {};

// exports.getAllMen = (req, res, next) => {};