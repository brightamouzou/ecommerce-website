import { Box, MenuItem, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SnackbarContext } from "../../contexts/SnackBar";


const colors={
  Noir:"black",
  Bleu:"blue", 
  Rouge:"red", 
  Jaune:"yellow", 
  Orange:"orange",
  Violet:"violet"
}


function AddColorForm({setColors}) {
  const [numberOfImages, setnumberOfImages] = useState(0)
  const [colorName,setColorName]=useState("")
  const [large,setLarge]=useState("")
  const [small,setSmall]=useState("")
  const [medium,setMedium]=useState("")
  const [useTheSameImage, setUseTheSameImage]=useState(false)
  const [otherViewImages, setOtherViewImages]=useState({})

  const setSnackbarState=useContext(SnackbarContext)
  const addColorForm=useRef()

  function handleSubmit(e){

    const name=colorName
    const formData={
      small,
      large,
      default:medium,
      otherViewImages:otherViewImages,
    }  
    
    setColors(c=>({...c, [name]:formData}));
    setSnackbarState(true, "success", "Votre couleur a été ajoutée avec succès")

    document.querySelector(".addColorReset").click()
    setColorName("");setLarge("");setMedium("");setSmall("");setOtherViewImages({});setUseTheSameImage(false);

  }
  

  return(
    <div className='addColorForms'>
         <Box
            component="form"
            autoComplete="off"
            className='addColorForm'
            ref={addColorForm}
        >
           <fieldset>
             <legend>Choix de la couleur</legend>
             <div>
             <TextField
              select
              label="Couleur"
              value={colorName}
              onChange={e=>{setColorName(e.target.value)}}
              required
              size='small'
             >
              {Object.keys(colors).map((key, idx) => (

                <MenuItem key={idx} value={colors[key]} style={{display:"flex", position:"relative",zIndex:"5000",justifyContent:"space-between"}} selected={idx==1?true:false}>
                  {key}
                  <span className='colorWiew' style={{marginLeft:"5px",width:"20px",height:"20px",borderRadius:"50%",background:colors[key]}}></span>
                </MenuItem>
              ))}
            </TextField>

            <TextField
                type={"number"}
                label="Nombre d'artciles de cette couleur"
                required
                size='small'

                InputProps={
                  {
                    inputProps:{
                      min:"1",
                    }
                  }
                }

            />
             </div>

          </fieldset>
          <fieldset>
            <legend>Images pour la publicité</legend>

              <FormGroup onClick={()=>setUseTheSameImage(v=>!v)}>
                  <FormControlLabel control={<Checkbox inputProps={{required:"true"}}/>} label="Utiliser la meme image ?" />
              </FormGroup>
            <TextField
                type={"url"}
                label={useTheSameImage ?"Url de l'image": "Petite image(small)"}
                value={small}
                onChange={e=>{setSmall(e.target.value)}}
                required
                size='small'


            />
            {
              !useTheSameImage && (
                <>
                  <TextField
                      type={"url"}
                      label="Image par defaut(medium)"
                      required
                      value={medium}
                      onChange={e=>setMedium(e.target.value)}
                    size='small'

                  />
                  <TextField
                      type={"url"}
                      label="Grande image"
                      required
                      value={large}
                      onChange={e=>{setLarge(e.target.value)}}
                      size='small'

                  />
                </>

              )
            }
          </fieldset>

          <fieldset>
            <legend>Images sous differents angles de l'arctile</legend>
            <TextField
                type={"number"}
                label="Nombre d'images"
                value={numberOfImages}
                onChange={(e)=>setnumberOfImages(parseInt(e.target.value))}
                InputProps={
                  {
                    inputProps:{
                      min:"0", 
                      max:"5", 
                    }
                  }
                }
                size='small'

            />
            {
              numberOfImages? (new Array(numberOfImages||1).fill('').map((ele, idx)=>(
                <TextField 
                  key={idx}
                  type={"url"}
                  label="Url de l'image"
                  onChange={(e)=>{setOtherViewImages(c=>({...c, [idx]:e.target.value}))}}
                  size='small'

                />)
                  
                )
              ):(
                ""
              )
            }

            <button type="button" className='addColorSubmit' onClick={handleSubmit} style={{display:"none"}}>Soumettre</button>
            <button type="reset" className='addColorReset' style={{display:"none"}}>Reinitialiser</button>

          </fieldset>



         </Box>
    </div>
  )
}

export default AddColorForm