import React, { useState , useRef} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { categories, subCategories, morePrecisions, sexs} from "../../utils/forms";
import AddColor from './AddColor';
import WrapperBox from '../WrapperBox';


export default function NewArticleForm() {
  const [artcileName,arcticlePrice,subCategory,articleFor]=new Array(4).fill(useRef(null))
  const [category, setCartegory] = useState("shoes")
  const [colors, setColors]=useState({})


  return (
    <div className='newArticle'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
        className='newArticleForm'
      >
        <WrapperBox>

          <div className="newArticleFormBox">
          <h3>Création d'un nouvel article</h3>

              
            <TextField size='small' id="outlined-text" label="Nom de l'article" type="text" ref={artcileName} />
        
            <TextField label="Prix (en $)" type="number"
              InputProps={{
                inputProps:{
                  min:"1"
                }
              }}
              ref={arcticlePrice}
              required  
              size='small'
            />

            <TextField
              id="outlined-select-currency"
              select
              label="Category"
              value={category}
              onChange={(e) => setCartegory(e.target.value)}
              required  
              size='small'

            >
              {categories.map(({name, value}, idx) => (
                <MenuItem key={value} value={value} selected={idx==1?true:false}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Subcategory"
              ref={subCategory}
              required  
              size='small'
            >
              
              { subCategories[Object.keys(subCategories).find(ele=>ele===category)].map(subcategory=>(
                <MenuItem key={subcategory.value} value={subcategory.value}>
                  {subcategory.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Artcile Pour"
              ref={articleFor}
              required  
              size='small'
            >

              { sexs.map(sex=>(
                <MenuItem key={sex.value} value={sex.value}>
                  {sex.name}
                </MenuItem>
              ))}
            </TextField>

            <AddColor setColors={setColors}/>

            <button  className='isDark filled'>Creer l'article</button>
          </div>

          
        </WrapperBox>


      </Box>

      <div className="chosenColors formInputStyle">
          <h3>Couleurs ajoutées( {Object.keys(colors).length})</h3>
            {
              Object.keys(colors).map((colorItem, idx)=>{         
                  return <button key={idx} className='colorItem' style={{background:colorItem}}>{colorItem}</button>
              })
            }
      </div>
    </div>
  )
}
