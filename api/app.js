//Modules
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const helmet=require("helmet");
const morgan=require("morgan");
const verifyReqQueries=require("./middlewares/getQueries")
const cors = require("cors");

//Routes
const shoesRoutes=require("./routes/shoes/index");
const accessoriesRoutes=require("./routes/accessories/index");
const clothesRoutes=require("./routes/clothes/index");
const adminRoutes=require("./routes/admin/index");
const shoesRoutesBySex = require("./routes/sortArticlesBySex/shoes");
const clothesRoutesBySex=require("./routes/sortArticlesBySex/accesories")
const accessoriesRoutesBySex = require("./routes/sortArticlesBySex/accesories");
const getByCategoryRoutes = require("./routes/getByCategory/index");
const getBySexRoutes = require("./routes/getBySex/index");
const randomRoutes=require("./routes/randomRoutes");
const Colors=require("./models/Color")
const Article = require("./models/Article");
const Color = require("./models/Color");
require("dotenv").config();


//Uses
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(morgan("dev"));

//Connection to MongoDB 
mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser:true ,useUnifiedTopology:true, useCreateIndex:true})
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error(err))


// app.use(require("cors")({
//     origin:"http://localhost:3000"
// }))


//Routes

/*
    * If the request concerns the category, we will go for sorting by categories categories routes 
    * If the request concerns only the sex, we will go for sorting by  routes 
    * If the requests bth categories and sex we will go for categories with  including sex in the req.query
*/ 
const articleBaseURL = "/api/articles";

app.use(`${articleBaseURL}/s`, verifyReqQueries, getBySexRoutes);
app.use(`${articleBaseURL}`, verifyReqQueries, getByCategoryRoutes);

app.get('/api/q/articles',async (req,res)=>{
  const pricesInCents=[0,7500,15000,20000]
  const {price,color,...others}=req.query
  let minPrice= 0,maxPrice=1000000000000
  let queriedArticles = [];

  try {
    console.log(req.query);
    if (price || color) {
      if (price) {
        if (price == "200+") {
          queriedArticles = await Article.find({
            ...others,
            price: { $gte: pricesInCents.at(-1) },
          });
        } else {
          const priceIndex = pricesInCents.indexOf(parseInt(price));
          if (priceIndex && priceIndex !== -1) {
            maxPrice = pricesInCents[priceIndex];
            minPrice = pricesInCents[priceIndex - 1];
            queriedArticles = await Article.find({
              ...others,
              price: { $gte: minPrice, $lt: maxPrice },
            });

            console.log(queriedArticles);
          }
        }
      }
      if (color) {
          console.log("color yes");

        //Colors
        let queriedColors = await Color.find({
          colorName: {
            $regex: color[0].toUpperCase() + color.slice(1),
            $options: "i",
          },
        });

        console.log("queriedColors", queriedColors);

        if (queriedColors.length) {
          const colorsGroupedByArticleId = groupColorsByIds(queriedColors);
          console.log("\033[0,31m;colorsGroupedByArticle:", colorsGroupedByArticleId);
          const artilcesFromColors = await queryArticlesFromColors(
            Object.keys(colorsGroupedByArticleId)
          );

          if (artilcesFromColors) {
            console.log("enfin articles from colors");
            queriedArticles.push(...artilcesFromColors);
          }
        }
      }
      
    } else {
      console.log("else");
      queriedArticles = await Article.find({
        ...others,
      });
    }
      console.log("queriedArtilce", queriedArticles);

  } catch (err) {
    console.log(err.message);
  }
  

  // console.log(queriedArticles);

  return res.json({
    found:true,
    items:queriedArticles
  })
    
})


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
    }).catch(err=>{
      console.log(err.message);
      
    })
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


//And Here we are going for sorting unequely by sex
// /s in the path means : sorting by sex

// app.use(`${articleBaseURL}/s/shoes`, verifyReqQueries, shoesRoutesBySex);
// app.use(`${articleBaseURL}/s/clothes`, verifyReqQueries, clothesRoutesBySex);
// app.use(`${articleBaseURL}/s/accessories`,verifyReqQueries,accessoriesRoutesBySex);



const interceptionFuntion=(value)=>{
    return async(req, res)=>{
      console.log(value);
      res.json({ message: "I reply to you from the intercepeted function" });
    }
}

app.use("/random", randomRoutes)
app.use("/api/admin", adminRoutes)

app.delete("/delete-accessories",async (req,res)=>{
  try{
    await Colors.deleteMany({category:"accessories"})
    await Article.deleteMany({ category: "accessories" });
    // res.status(200).json({message:"Supprimé avec succès"})
  }catch(e){
    res.status(400).json({ message: "Echec" });

  }
})



const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running on", port));

