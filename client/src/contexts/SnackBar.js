import React, {createContext, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarContext=createContext()  

const SnackbarContextComponent = ({children}) => {
    let snackbarInitialState={
        open:false, 
        severity:"success", 
        message:"message", 
        position:{
          top:"0 !important",
          left:"50% !important",
          transform:"translateX(-50%) translateY(-40%) !important"
        }
    }
    
    const [snackbarState, setSnackbarState]=useState(snackbarInitialState)

    const  snackBarSetter=(open, severity, message)=>setSnackbarState(c=>({...c, open, severity, message}))

    const handleClose = (event, reason) => {

      setSnackbarState({...snackbarState, open:false})
    };
    
    return (
        <SnackbarContext.Provider value={snackBarSetter}>
          <Snackbar open={snackbarState.open} autoHideDuration={1000000} sx={snackbarInitialState.position} onClose={handleClose}>
              <Alert onClose={handleClose} severity={snackbarState.severity} sx={{ width: '100%'}}>
                {snackbarState.message}
              </Alert>
          </Snackbar>
          {children}
            
        </SnackbarContext.Provider>
    );
};

export default SnackbarContextComponent;