const Article = require('../models/Article');

const router=require('express').Router();

router.get("/:category", async (req, res) => {
    let { price, color, page,...others} = req.query;
    page=parseInt(page)||0;
    const { category } = req.params;
    console.log(color);
    const pricesInCents = [0, 7500, 15000, 20000];
    let queriedArticles=[];

    if (price || color) {
      if (price) {
        let minPrice = 20000; //Initialization at 200.00$
        let maxPriceIndex = pricesInCents.indexOf(parseInt(price));
        let maxPrice =maxPriceIndex != -1 ? pricesInCents[maxPriceIndex] : 1000000000;
        if (maxPriceIndex != -1 && maxPriceIndex !=0){
          // price=="200+"
          minPrice = pricesInCents[maxPriceIndex - 1];
        } 
        if(color){
          //Price and color
          queriedArticles = await Article.find({
            price: { $gte: minPrice, $lt: maxPrice },
            "colors.name": { $regex: color, $options: "i" },
            ...others,
            category
          })
            .skip(page)
            .limit(10);
         
        }else{
          //No color And price !="200+" 
          queriedArticles = await Article.find({
            price: { $gte: minPrice, $lt: maxPrice },
            ...others,
            category,
          })
            .skip(page)
            .limit(10);
        }
      }else{
        //No price. only color
        console.log(color);
        queriedArticles = await Article.find({
          "colors.name": { $regex: color, $options: "i" },
          ...others,
          category,
        })
          .skip(page)
          .limit(10);
      }

    }else{
      //No price no color
      queriedArticles = await Article.find({
        ...others,
        category,
      })
        .skip(page)
        .limit(10);
    }

    return res.json({
      found: true,
      items: queriedArticles,
    });
    
  });




   function queryArticlesFromColors(colorsIds) {
     let articlesFromColorsFetching = Promise.all(
       colorsIds.map(async (articleId) => {
         return Article.find({
           _id: articleId,
         }).catch((e = null));
       })
     );

     return articlesFromColorsFetching
       .then((articles) => {
         // console.log("articles", articles);
         if (articles.length) {
           return articles;
         }
       })
       .catch((err) => {
         console.log(err.message);
       });
     // return;
   }

   function groupColorsByIds(colorObjects) {
     const colorsGroupedByArticleId = {};

     if (colorObjects.length) {
       [...colorObjects].forEach((color) => {
         const { articleId, _id } = color;
         if (!colorsGroupedByArticleId[articleId]) {
           colorsGroupedByArticleId[articleId] = [];
         }
         colorsGroupedByArticleId[articleId].push(_id);
       });
     }

     return colorsGroupedByArticleId;
   }

module.exports=router;