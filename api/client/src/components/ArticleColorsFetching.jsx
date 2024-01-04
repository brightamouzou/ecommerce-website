import axios from 'axios'
import { useEffect, useState } from 'react'

function ArticleColorsFetching(colorsIds,category,slug) {
  const [colors,setColors]=useState([]);

  const makeCancellable=(promise)=>{
    let isCancelled=false;

    const wrappedPromise=new Promise((resolve, reject)=>{
      promise
      .then(res=>{
        isCancelled?reject({isCancelled:true}):(
          resolve(res)
        )
      },error=>{
        isCancelled ? reject({ isCancelled: true }):reject(error);
      })
    })

    return {
      promise:wrappedPromise,
      cancel(){
        isCancelled=true
      }
    }
  }

  const colorsFetching = Promise.all(
    colorsIds.map(async (colorId) => {
      return axios({
        method: "GET",
        url: `/api/articles/slugandcolor/${category}/${slug}/${colorId}`,
      }).catch((err) => {
        return;
      });
    })
  );



  useEffect(()=>{
 
    let a=makeCancellable(colorsFetching);

    a.promise.then(res=>{
      //console.log(res);
      setColors(c=>({...c, colorsObjects:[...res].map(ele=>ele.data.item.colorObject)}))
    },e=>{
     //console.log(e.message)) 
    })

  }, [])
  return colors?colors:null;

}

export default ArticleColorsFetching;