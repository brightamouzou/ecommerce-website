import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function SearchBar() {
  return (
    <form className='searchbar header__searchBar'>
        <label>
            <button type="submit"><SearchOutlinedIcon/></button>
            <input type="text" placeholder='Rechercher un article'/>
        </label>
    </form>
  )
}

export default SearchBar
