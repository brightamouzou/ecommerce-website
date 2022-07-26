import Collapse from "../Collapse";
import React, { useContext, useEffect, useState } from "react";
import AddToCartButton from "../Cart/AddToCartButton";
import AddFavoriteButton from "../Cart/AddToCartFavorite";
import ArticleColorsView from "./ArticleColorsView";
import WrapperBox from "../WrapperBox";
import Stars from "../Stars";
import ArticleColorsFetching from "../ArticleColorsFetching";
import { useDispatch} from "react-redux";
import { addToCart } from "../../redux/actions/CartUtils";
import { SnackbarContext } from "../../contexts/SnackBar";
import { addToFavorite as addToFavoriteAction } from "../../redux/actions/user";
function AboutArticle({ article }) {
  const { slug, category} = article;
  const colorId=article.colorObject.currentColorId;
  let colorsObjects;
  const dispatch = useDispatch();
  const snackBarAlertSetter=useContext(SnackbarContext);
  const [selectedSize,setSelectedSize]=useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");


  function addToFavorite(){
    try{
      dispatch(addToFavoriteAction(article.colorId,article.slug,article.category))
      snackBarAlertSetter("Produit ajouté aux favoris avec succès",true,2000,"success");
    }catch(err){
    }
  }

  function addArticleToCart() {
    if(!selectedSize){
      setSizeError("Veuillez selectionner la taille")
      return
    }else if(parseInt(selectedQuantity)<1){
      setQuantityError("Veuillez selectionner une quantité valide");
      return;
    }
    setQuantityError("");
    setSizeError("");

    dispatch(
      addToCart(slug, category, colorId, {
        size:selectedSize?  selectedSize.toString():article.category == "shoes" ? selectedSize.toString() : "XL",
        quantity: selectedQuantity.toString(),
      })
      );
      snackBarAlertSetter("Produit ajouté au panier avec succès",true,2000,"success");
    
  }
  try {
    colorsObjects = ArticleColorsFetching(
      article.colors.map((e) => e.colorId),
      article.category,
      article.slug
    ).colorsObjects;

  

  } catch (err) {
    console.log(err.message);

    // return
  }

  function chooseSize(ele,idx){
    return e=>{
      setSelectedSize(ele);
      e.target.classList.add("b-success")
      setSizeError("")
        const sizes = document.querySelectorAll(".size");

        sizes.forEach((size, cIdx) => {
          if (idx !== cIdx) {
            size.classList.remove("b-danger", "b-success");
          }else{
            
          }
        });
    }
  }

  return (
    <div className="aboutArticle">
      {colorsObjects ? (
        <WrapperBox>
          <div className="aboutArticle__title">
            <h2 className="aboutArticle__title__name">{article.name}</h2>
            <div className="aboutArticle__title__category">
              {article.category} {article.sex}
            </div>
            <div className="aboutArticle__title__price">
              {article.price.toString().slice(0, -2) +
                "," +
                article.price.toString().slice(-3, -1)}{" "}
              $
            </div>
          </div>
          <div className="aboutArticle__colorsView">
            <ArticleColorsView colors={colorsObjects} />
          </div>
          <div className="aboutArticle__size">
            <h3>Taille</h3>
            <div className="t-danger">{sizeError}</div>
            <div className="items">
              {article.availableSizes ? (
                Object.keys(article.availableSizes).map((ele, idx) => (
                  <div
                    className={`size ${sizeError ? "b-danger" : ""}`}
                    onClick={chooseSize(ele, idx)}
                  >
                    {ele}
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>

            <div className="aboutArticle__quantity ">
              <h3>Quantité</h3>
              <div className="t-danger">{quantityError}</div>
              <input type="number" value={selectedQuantity} onChange={(e)=>setSelectedQuantity(e.target.value)} defaultValue="1" min={"1"} />
            </div>
          </div>
          <div className="aboutArticle__availableSizes sizeSelect"></div>
          <div className="addToComponents addTo">
            <span onClick={addArticleToCart}>
              <AddToCartButton />
            </span>

            <span onClick={addToFavorite}>
              <AddFavoriteButton />
            </span>
          </div>
          <div className="description">
            <Collapse headerMessage={"Description"}>
              {article.description}
            </Collapse>
          </div>
          <div className="stars">
            <Collapse headerMessage={"Avis (14 votes)"}>
              <Stars starsNumber={4.2} />
            </Collapse>
          </div>
        </WrapperBox>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AboutArticle;
