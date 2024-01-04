import React, { useContext, useEffect, useMemo, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import AddColorForm from './AddColorForm';
import {ModalContext} from '../../contexts/Modal';


const ElementAtTopLeft=({payloadFunction})=>{

  const submitForm=function(){
    document.querySelector(".addColorSubmit").click();
  }
  return <button type='button' onClick={submitForm} className='btnRounded filled isDark'>Ajouter la couleur</button>

}

function AddColor({setColors}) {
  const [openModal, setOpenModal]=useState(true)
  const handleOpen=()=>modalContextState(true)
  const handleClose=()=>modalContextState(false)
  const modalContextState=useContext(ModalContext)

  useEffect(()=>{
    modalContextState(AddColorForm,{setColors},openModal,handleOpen, handleClose,"Ajouter une couleur", ElementAtTopLeft)
  },[])
  
  return (
      <div className='addColor'>
        <button type="button" onClick={()=>setOpenModal(true)} className=''>
          
          <span>Ajouter une couleur</span>
          <span><AddIcon/></span>
        </button>
          <AddColorForm setColors={setColors}/>
      </div>
        
  )
}
export default AddColor;