const Article = require("../../models/Article");
const Color = require("../../models/Color");
const {ERROR_MESSAGE, CUSTOM_CATEGORIES, NOT_FOUND_MESSAGE}=require("../../utils/variables");
 
exports.getFromCategoryAndSex = (customSex) => {
    return async (req, res) => {
      const page=parseInt(req.query.page)||0;
        console.log(req.params);
        try {
        console.log("\033[0;31m Requete pour shoes hommes");
      const customCategory = req.params.category;
      if (CUSTOM_CATEGORIES.indexOf(customCategory) == -1) {
        return res.json({ message: ERROR_MESSAGE, found: false });
      }

      //Articles which ared directly of sex :men
      const currentCategoryArticles1 = await Article.find({
        sex: customSex,
        category: customCategory,
      }).skip(page).limit(10);

      //Colors which are are of sex :men . I do this because we can have articles
      //which are for all and have specifics colors for men and women
      const currentCategoryArticles2Colors = await Color.find({
        category: customCategory,
        sex: customSex,
      });
      console.log(
        "\ncurrentCategoryArticles2Colors ",
        currentCategoryArticles2Colors
      );

      if (!currentCategoryArticles1 && !currentCategoryArticles2Colors.length) {
        return res.json({ found: false, message: NOT_FOUND_MESSAGE });
      } else if (!currentCategoryArticles2Colors) {
        return res.json({ found: true, items: currentCategoryArticles1 });
      }

      console.log("Bienvenue ici");
      // Group colors by article id because many Color instances might have the same colorId
      const colorsGroupedByArticle = {};
      if (currentCategoryArticles2Colors) {
        currentCategoryArticles2Colors.forEach((ele) => {
          const { articleId, _id } = ele;
          if (!colorsGroupedByArticle[articleId]) {
            colorsGroupedByArticle[articleId] = [];
          }
          colorsGroupedByArticle[articleId].push(String(_id));
        });
      }
      console.log("colorsGroupedByArticle", colorsGroupedByArticle);
      //Join artcile1 and article2
      if (currentCategoryArticles2Colors) {
        let currentCategoryArticles2Fetching = Promise.all(
          Object.keys(colorsGroupedByArticle).map(async (articleId) => {
            console.log("the Id",articleId);
            return  Article.findOne({
              _id: articleId,
              category:"all"
            }).catch(e=>{

            });
          })
        );
        currentCategoryArticles2Fetching
          .then((currentCategoryArticles2) => {
            currentCategoryArticles2 = currentCategoryArticles1.filter(
              (ele) => ele !==null
            );
            console.log("articles trouvés", currentCategoryArticles2);
            const currentCategoryDefinitiveArticles = [
              ...currentCategoryArticles1,
            
            ];
            if(currentCategoryArticles2.length){
              currentCategoryArticles1.concat([
                 ...currentCategoryArticles2.map((article) => {
                  return {
                    ...article,
                    colors: colorsGroupedByArticle[String(article._id)],
                }}
              )])
               
            }
            res.json({ found: true, items: currentCategoryDefinitiveArticles });
          })
          .catch((err) => {
            console.log(err);
            return res.json({ found: false, message: ERROR_MESSAGE });
          });
      } else {
        return res.json({ found: true, items: currentCategoryArticles1 });
      }

      // console.log(definitiveMenArticles);

      // res.json({ found: true, items: currentCategoryDefinitiveArticles });
    } catch (e) {
      console.log(e.message);
    }
  };
};

