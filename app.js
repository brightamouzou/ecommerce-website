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
const adminRoutes=require("./routes/admin/index");
const getByCategoryRoutes = require("./routes/getByCategory/index");
const getBySexRoutes = require("./routes/getBySex/index");
const Colors=require("./models/Color")
const Article = require("./models/Article");
const queriesRoutes=require("./routes/queries");
const payementController = require("./controllers/payement");
const userRoutes=require("./routes/user/index");
const isAuth = require("./middlewares/auth");
const userCheckRoutes=require('./routes/user/checkingRoutes');
require("dotenv").config();


//Uses
// app.use(helmet())
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());


//Connection to MongoDB 
mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser:true ,useUnifiedTopology:true, useCreateIndex:true})
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error(err))


// app.use(require("cors")({
//     origin:"http://localhost:3000"
// }))


/*
    * If the request concerns the category, we will go for sorting by categories categories routes 
    * If the request concerns only the sex, we will go for sorting by  routes 
    * If the requests bth categories and sex we will go for categories with  including sex in the req.query
*/ 
const articleBaseURL = "/api/articles";
app.use(`${articleBaseURL}/s`, verifyReqQueries, getBySexRoutes);
app.use(`${articleBaseURL}`, verifyReqQueries, getByCategoryRoutes);

app.use("/api/q/articles",queriesRoutes)

app.post("/api/create-payement-session", payementController);



//And Here we are going for sorting unequely by sex
// /s in the path means : sorting by sex

app.use("/api/user-checks", isAuth, userCheckRoutes);

// app.use("/api/user-checks", (req,res)=>{
//   console.log(req.body);
// });

app.use("/api/users",userRoutes);
app.use("/api/admin", adminRoutes);


//Serve frontend
// if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "client/build")));


  // app.get("*", (req, res) =>{
  //   res.sendFile(
  //     path.resolve(__dirname,"client", "build", "index.html")
  //   )
  // }
  // );
// }else{
    
//     // res.send("Please run to production")
//     console.log("Run to production");

// }
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running on", port));

