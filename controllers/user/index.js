const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Article = require("../../models/Article");
const Favorite = require("../../models/Favorite");
const User = require("../../models/User");


exports.signup = (req, res, next) => {

  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hasSuscribedNewsLetter:req.body.newsletter,
        password: hash,
      });
      user
        .save()
        .then((newUser) => {res.status(201).json({ message: "Utilisateur créé !",status:201})})
        .catch((error) => res.status(400).json({ message:error.message }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error:error.message }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getUser=async (req,res)=>{

  try{

    const wantedUser = await User.findById(req.params.userId, {
      password: 0,
      hasSuscribedNewsLetter: 0,
    });
  
    if(wantedUser){
      res.json({
        found:true,
        user:wantedUser
      })
    }else{
      throw Error("Errur 404");
    }

  }catch(err){
    res.json({
      found:false,
    })
  }
}

exports.getAllFavorite=async(req,res)=>{
  try{
    const favorite=await Favorite.find({
      userId:req.body.userId
    },{createdAt:0,updatedAt:0}).sort({createdAt:-1})

    if(favorite){
      res.json({
        found:true,
        items:[...favorite]
      })
  }else{
    throw "Erreur 404"
  }
  

  }catch(err){
    console.log(err.message);
     res.json({
      found:false
    })
    
  }


}

exports.addFavorite=async(req,res)=>{

  try{
    const {userId,slug,colorId,category}=req.body

    const newFavorite=new Favorite({
      userId,slug,colorId,category
    })

    await newFavorite.save();

    res.json({
      status:201,
      message:"Favori ajouté avec succès",
    })

  }catch(err){
    console.log(err.message);
    res.json({
      status:400,
      message:"Erreur lors de l'ajout du favori"
    })
  }
}

exports.deleteFromFavorite=async (req,res)=>{
  const {slug,colorId}=req.body
  try{
    if(slug && colorId){
      await Favorite.deleteOne({
        slug,
        colorId
      })

      res.json({
        status: 200,
      });
    }else{
      throw "Erreur 400";
    }

  }catch(err){
    res.json({
      status:400
    })
  }

}