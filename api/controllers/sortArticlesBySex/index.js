const Article = require("../../models/Article");
const Color = require("../../models/Color");
const ERROR_MESSAGE="Oups";

exports.getFromCategoryAndSex = (customCategory, customSex) => {
  return async (req, res, next) => {

    console.log(customCategory, customSex);
    
    try {
      //Articles which ared directly of sex :men
      const currentCategoryArticles1 = await Article.find({
        sex: customSex,
        category: customCategory
      });

      

      //Colors which are are of sex :men . I do this because we can have articles 
      //which are for all and have specifics colors for men and women 
      const currentCategoryArticles2Colors = await Color.find({
        category: customCategory,
        sex: customSex,
      });
      console.log("\ncurrentCategoryArticles2Colors ", currentCategoryArticles2Colors);

      // Group colors by article id because many Color instances might have the same colorId

      const colorsGroupedByArtilce = {};
      if (currentCategoryArticles2Colors) {
        currentCategoryArticles2Colors.forEach((ele) => {
          const { articleId, _id } = ele;
          if (!colorsGroupedByArtilce[articleId]) {
            colorsGroupedByArtilce[articleId] = [];
          }
          colorsGroupedByArtilce[articleId].push(String(_id));
        });
      }

      //Join artcile1 and article2
      if (currentCategoryArticles2Colors) {
        let currentCategoryArticles2Fetching = Promise.all(
          Object.keys(colorsGroupedByArtilce).map(async (articleId) => {
            return Article.findOne({
              categories: customCategory,
              _id: articleId,
            });
          })
          );
          currentCategoryArticles2Fetching
          .then((currentCategoryArticles2) => {
            const currentCategoryDefinitiveArticles = [
              ...currentCategoryArticles1,
              ...currentCategoryArticles2.map((article) => {
                return {
                  ...article,
                  colors: colorsGroupedByArtilce[article.id],
                };
              }),
            ];
            console.log((currentCategoryDefinitiveArticles));
          }
          ).catch(err=>{
            console.log(err.message);
            res.json({found: false, message: ERROR_MESSAGE});
          });
        }else{
          res.json({ found: true, items: currentCategoryArticles1 });
        }


     
      console.log(definitiveMenArticles);

      res.json({ found: true, items: definitiveMenArticles });
    } catch (e) {
      console.log(e.message);
      // res.json({ found: false, items: definitiveMenArticles });

    }
  };
};
