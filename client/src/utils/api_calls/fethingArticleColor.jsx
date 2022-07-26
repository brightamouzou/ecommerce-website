import axios from "axios";

export async function fetchData(category, articleSlug,colorId,fecthForPriceOnly=false) {
  try {
    let data;
    if(fecthForPriceOnly){
        data= await(await axios.get(
        `/api/articles/price/slugandcolor/${category}/${articleSlug}/${colorId}`
      )).data;
    }else{
      data=await( await axios.get(
        `/api/articles/slugandcolor/${category}/${articleSlug}/${colorId}`
      )).data;

      console.log(data);
    }

    if (data && data.found) {
      console.log(data);
      return {...data.item}
    } else {
      console.log("not found");
      new Promise.reject(data.message)
    }
  } catch (err) {
    console.log(err.message);
      new Promise.reject(err.message);
  }
}
