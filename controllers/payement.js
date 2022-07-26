require("dotenv").config();
const  Fetch=require("node-fetch");
const express = require("express");
const Order = require("../models/Order");
const app = express();
const stripe = require("stripe")(
 process.env.STRIPE_KEY
);
async function paiement(req,res){
  console.log("com");
    console.log(req.get('origin'));


  try {
    let {tokenId,purchasedElements,shippingInformations}=req.body;
    console.log(req.body);
    let purchasedElementsFetching=Promise.all(purchasedElements.map(async element=>{
      const {colorId,slug,category}=element;
      return (await Fetch(`${req.get("origin")}/api/articles/price/slugandcolor/${category}/${slug}/${colorId}`)).json().catch(
        (err) =>{
          console.log("Erruer:",err.message);
          return null
        } 
      );
    }))

    purchasedElementsFetching
    .then(async resp=>{
        console.log(res);

        let amount = resp
          .filter((e) => e !== null)
          .reduce((ac, cv) => {
            // console.log(cv);
         
            if(typeof(ac)==="number"){
              if (cv.item && cv.item.price) {
                return  ac+cv.item.price;
              } else {
                return null;
              }
            }
            // }else{
            //   console.log("b");
            //     if (cv.item && cv.item.price) {
            //         return ac.item.price; 
            //     }else{
            //       return 0;
            //     }
            // }
         
          },0);

          if(amount && amount>0){
            try{
              let stripeRes = await stripe.charges.create({
                source: tokenId,
                amount:  amount + purchasedElements.length*1099,//We add shipping  costs
                currency: "usd",
              });

              if(stripeRes){
                const {id,amount,shipping,billing_details,receipt_url,status,created}=stripeRes;
                
                if(status==="succeeded"){
                  // console.log(stripeRes);
                  const newOrder = new Order({
                    paymentId: id,
                    shippingAddress: shippingInformations,
                    billingAddress:billing_details,
                    saleDate: Date.now(),
                    //Livrasion entre 24 et 72 h
                    shippingDateInterval: `${new Date(
                      Date.now() + 86400 * 1000
                    ).toLocaleDateString()}-${new Date(
                      Date.now() + 86400 * 3 * 1000
                    ).toLocaleDateString()}`,
                    deliveryStatus: 0,
                    purshasedElements: purchasedElements,
                    amount: amount,
                  });

                  await newOrder.save();

                  res.json({
                    status: 200,
                    redirectUrl: receipt_url,
                  });
                }

              }else{
                  res.json({
                    status: 200,
                    redirectUrl: receipt_url,
                  });
                throw "Erreur survenue lors du paiement"
              }
            }catch(err){
              console.log(err.message);
              return res.json({
                status: 400,
                message: err.message,
              });
            }
          }
       
    }).catch(err=>{
      console.log(err.message);
    })

  } catch (e) {
    console.error(e.message);
  }
    
} 

module.exports=paiement;








