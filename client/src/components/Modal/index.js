// import React, { useEffect, useState } from 'react'
// import { useRef, useContext } from 'react'
// import { modalContext } from '../../contexts/modal';
// import CloseIcon from "../../components/CloseIcon"

// const  Modal=(props)=>{
//   const {payloadFunctions, style={}, open=false, handleOpen=null,onClose=null, ElementAtTopLeft=null, topLeftHandlerFunction=null, title}=props
//   const {TopLeftComponent, payloadFunction}=ElementAtTopLeft;
//   const modal=useRef();
//   useEffect(()=>{
//     if (open) {
//       modal.current.style.height=`${Math.max(document.body.scrollHeight, document.body.offsetHeight)}px`
//       window.scrollTo(0,0)
//       document.body.addEventListener("scroll", ()=>{
//         window.scroll(0,0);
//       }, {}, true); 
//       document.body.style.height=window.innerHeight;
//       document.body.style.overflow="hidden";
//     }else{
//       document.body.style.overflowY="auto";
//       document.body.removeEventListener("scroll",{}, true)
//     }
    
//   }, [open])
//    return (
//     <>
//     {open&&(
      
//       <div onClick={()=>onClose()} ref={modal} style={style} className={`modal`}>
  
//           <div onClick={(e)=>e.stopPropagation()}  className="modalInside">
//             {/* <div className='modalTitle'>
//               <h3>{title}</h3>
//             </div> */}
//             <div className="modalHeader">
//                 <div className="somethingAtTopLeft" onClick={topLeftHandlerFunction&&topLeftHandlerFunction()}>
//                   {/*Je peux l'utiliser notamment pour un button se connecter par exemple que  je veux placer en haut à gauche */}
//                   {
//                     <TopLeftComponent />||null
//                   }
//                 </div>
//                 <span className='closeIcon' onClick={()=>onClose()}><CloseIcon /></span>
  
//             </div>
//             <div className="modalBody">
//                 {props.children}
//             </div>
//             <div className="modalFooter">
  
//             </div>
//           </div>
  
  
//       </div>
//     )}
//    </>
    
//   )
// }

// export default Modal