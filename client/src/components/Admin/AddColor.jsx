import React, { useContext, useEffect, useMemo, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import AddColorForm from './AddColorForm';
import { TextField } from '@mui/material';
import { categories, subCategories } from '../../utils/forms';
import {ModalContext} from '../../contexts/Modal';


const ElementAtTopLeft=({payloadFunction})=>{
  const [canSetFormData, setCanSetFormData]=useState(false) //can we change update the formdata with new formdata

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
  
  const [numberOfColors, setNumberOfColors]=useState()

  return (
      <div className='addColor'>
        <button type="button" onClick={()=>setOpenModal(true)} className=''>
          
          <span>Ajouter une couleur</span>
          <span><AddIcon/></span>
        </button>
        {/* <Modal
          title={"Ajouter une couleur"}
          open={openModal}
          onClose={handleClose}
          handleOpen={handleOpen}
          style={modalStyle("center", "flex-start")}
          ElementAtTopLeft={{payloadFunction:"", TopLeftComponent:ElementAtTopLeft}}
        > */}
          <AddColorForm setColors={setColors}/>
          {/* </Modal> */}
      </div>
        
  )
}

export default AddColor;