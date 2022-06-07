const Article=require("../../models/Article")
const Color = require("../../models/Color");
const {getSpecificArticleByColor:getSpecificShoeByColorId}=require("../shoes/get")


exports.getShoes=async (req, res)=>{
    // const queries
    try{

        const menArticles1=Article.find({sex:"men", category:"shoes"});
        const menArticles2Colors= await Colors.find({ category: "shoes", sex: "men" });
    
        const colorsGroupedByArtilce={}
        if (menArticles2Colors){
            menArticles2Colors.foreEach(ele=>{
                const {articleId, _id}=ele
                if(colorsGroupedByArtilce[articleId]){
                    colorsGroupedByArtilce[articleId]=[]
                }
                colorsGroupedByArtilce[articleId].append(_id)
            })
        }
    
        const menArticles2=[]
        if (menArticles2Colors) {
            menArticles2=Promise.all(Object.keys(colorsGroupedByArtilce).map(async articleId=>{
                return Article.findOne({ categories: "shoes", _id: articleId });
            }))
        }
    
        const definitiveMenArticles=[
            ...menArticles1,
            ...menArticles2.map((article)=>{
                return {
                    ...article,
                    colors:colorsGroupedByArtilce[article_id]
                }
            })
    
        ]
    res.json({found:true, items:definitiveMenArticles})
    }catch(e){
        console.log(e.message);
    }

    



}

exports.getClothes=async (req, res)=>{
    
}

exports.getAccesories=async (req, res)=>{
    
}

