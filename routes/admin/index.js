const router=require("express").Router();
const Article=require("../../models/Article")
const Color=require("../../models/Color")
const mongoose=require('mongoose')

router.post('/new-article',async (req, res)=>{
    console.log("new artcile");
    console.log(req.body);
    // res.status(200).json({message:"bien"});
    
    const {
      name,
      category,
      subCategories,
      price,
      sex,
      availableQuantity,
      availableSizes,
      colors,
      description,
    } = req.body;

    console.log(colors);
    const slug=name.toLowerCase().replaceAll(" ", "-")
    const url=`${req.protocol}://${req.get("host")}/articles/${category}/${slug}`

    try {
        const newArticle = new Article({
          name,
          slug,
          category,
          subCategories,
          price,
          description,
          sex,
          availableQuantity,
          availableSizes,
          url,
        });
        const savedArtcile=await newArticle.save()

        // const saveColors=new Promise((resolve, reject)=>{
            if(colors.length){
                console.log("has colors");
                const saveColors=Promise.all(colors.map(async color=>{
                    console.log("\n\n", color);
                    const newColor=new Color({
                        articleId:savedArtcile._id,
                        category:savedArtcile.category,
                        sex:color.sex,
                        colorName:color.colorName, 
                        url:`${req.protocol}://${req.get("host")}/articles/${savedArtcile.category}/${savedArtcile.slug}/${color.colorName}`, 
                        otherViewImages:Array.from(color.otherViewImages), 
                        images:color.images
                    })
                    
                    return newColor.save().catch(err=>{
                        console.log(err.message)
                        return null
                    })


                }))

                saveColors
                    .then(async(savedColors) => {
                        console.log("success");
                        console.log(savedColors);
                        await savedArtcile.update({
                            colors: savedColors.filter((color) => color !== null).map((color) =>{
                                console.log("color",color.colorName);
                                console.log("id", color._id);
                                return {
                                  name: color.colorName,
                                  colorId: String(color._id),
                                };
                            })
                        });
                        return res.json({ message: "success" });
                    })
                    .catch((e) => {
                    console.log(e.message);

                       return res.json({
                         errorMessage:
                           "Erreur lors de l'enregidtrement d'une des couleurs",
                       });
                     });

            }
        // })
     
    
    }catch(e){
        console.log(e.message);
        // res.json({errorMessage:"Erreur d'enregistrement de l'article"})
    }


})


module.exports=router;