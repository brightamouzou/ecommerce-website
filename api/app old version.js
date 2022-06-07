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


require("dotenv").config();


//Uses
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(morgan("dev"));

//Connection to MongoDB 
mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser:true ,useUnifiedTopology:true})
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


//Here we are going for categories
app.use(`${articleBaseURL}/shoes`, verifyReqQueries, shoesRoutes);
app.use(`${articleBaseURL}/clothes`, verifyReqQueries, clothesRoutes);
app.use(`${articleBaseURL}/accessories`, verifyReqQueries, accessoriesRoutes);
app.use(`${articleBaseURL}/:category`, verifyReqQueries, accessoriesRoutes);


//And Here we are going for sorting unequely by sex
// /s in the path means : sorting by sex

app.use(`${articleBaseURL}/s/shoes`, verifyReqQueries, shoesRoutesBySex);
app.use(`${articleBaseURL}/s/clothes`, verifyReqQueries, clothesRoutesBySex);
app.use(`${articleBaseURL}/s/accessories`,verifyReqQueries,accessoriesRoutesBySex);

const interceptionFuntion=(value)=>{
    return (req, res)=>{
      console.log(value);
      res.json({ message: "I reply to you from the intercepeted function" });
    }
}
app.get("/random", interceptionFuntion("You have successfullu intercepeted the request"))
app.use("/api/admin", adminRoutes)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running on", port));

