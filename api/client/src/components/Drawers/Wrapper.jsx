import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from 'react-router-dom';
import CloseIcon from '../CloseIcon';
import { HeaderOpened } from '../../contexts/mobileHeaderContext';

//A template that i use for every drawer
const DefaultDrawerHeader=()=>{
  return <div></div>
}
export default function WrapperTemplate({ direction, width, children, DrawerHeader=DefaultDrawerHeader,TogglerIcon}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const setIsHederOpened = React.useContext(HeaderOpened);


  const toggleDrawer = (_direction, open) => (event) => {
    setIsHederOpened.setter(v=>!v);
      console.log("yo");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [_direction]: open });
  };

  const list = (_direction, _width) => (
    <Box
      sx={{ width: width ? width : 250 }}
      role="presentation"
      // onClick={toggleDrawer(_direction, false)}
      onKeyDown={toggleDrawer(_direction, false)}
    >
      {children}
    </Box>
  );

  return (
    <div className="drawer">
      <Button onClick={toggleDrawer(direction, true)}>
        {
          TogglerIcon?(
            <TogglerIcon/>
          ):(
            <MenuIcon sx={{ width: "50px", height: "35px", color: "black" }} />
          )
        }
      </Button>
      <Drawer
        anchor={direction}
        open={state[direction]}
        onClose={toggleDrawer(direction, false)}
      >
        <div className="drawerHeader">
          <DrawerHeader />
          <span onClick={toggleDrawer(direction, false)}> <CloseIcon /></span>
          
        </div>

        <div className='drawerBody'>
          {list(direction)}
        
        </div>

      </Drawer>
    </div>
  );
}
