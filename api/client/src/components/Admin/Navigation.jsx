import React from 'react'
import WrapperTemplate from '../Drawers/Wrapper'
import LoginIcon from '@mui/icons-material/Login';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
const links=[
    {
        url:"/admin/se-connecter",
        text:"Se connecter",
        icon:LoginIcon
        
    },
    {
        url:"/admin/se-connecter",
        text:"Se connecter",
        icon:LoginIcon
        
    },
    {
        url:"/admin/se-connecter",
        text:"Se connecter",
        icon:LoginIcon
    },
]
function Navigation() {
  return (
    <div className='navigation admin-nav'>
        <WrapperTemplate
            direction={'left'}
        >
            <List>
                {links.map((link, index) => {
                    const Icon=link.icon
                    return <ListItem button key={index}>
                        <NavLink exact to={link.url} className="admin-nav-link" activeClassName={"admin-nav-active"}>
                            <ListItemIcon>
                            <Icon/>
                            </ListItemIcon>
                            <ListItemText primary={link.text} />
                        </NavLink>
                    </ListItem>
                })}
            </List>
            <Divider />
        </WrapperTemplate>
    </div>
  )
}

export default Navigation