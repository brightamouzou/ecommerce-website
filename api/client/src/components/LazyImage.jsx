import React from 'react'
import { useState ,useEffect} from 'react';
import IconToggleLoading from "./IconToggleLoading"
function LazyImage({url, onClick, ...otherProps}) {
    const [newUrl, setNewUrl]=useState("");
    useEffect(()=>{
        fetch(
            url
        )
          .then((res) => {
            return res.blob();
          })
          .then((blob) => {
            const newurl = URL.createObjectURL(blob);
            setNewUrl(newurl);
          });
    }, [url])
    return (
      <div className="lazyImage">
        {newUrl ? (
          // <LoadingSomeWhere/>
          <img src={newUrl} onClick={onClick && onClick()} {...otherProps} />
        ) : (
          // <IconToggleLoading restrictesd={true}/>

          <IconToggleLoading className="lazy" restricted={true} />
        )}
      </div>
    );
}

export default LazyImage