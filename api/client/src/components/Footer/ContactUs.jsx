import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CloseIcon from '../CloseIcon';
import AddIcon from "@mui/icons-material/Add";
import GitHubIcon from "@mui/icons-material/GitHub";
function ContactUs({onClickHandler, unrollSvgClick}) {
  return (
    <div className="contactUs">
      <button
        onClick={(e) => {
          onClickHandler && onClickHandler(e);
        }}
      >
        <span>Contact Us</span>
        <span className="toggleItem" onClick={(e)=>{unrollSvgClick && unrollSvgClick(e)}}>
          <AddIcon />
        </span>
      </button>
      <ul>
        <li className="contactUs__mail">
          <MailOutlineIcon />
          <span className="contactUs__label">brightamouzou@gmail.com</span>
        </li>

        <li className="contactUs__github">
          <GitHubIcon />
          <span className="contactUs__label"><a href="https://github.com/brightamouzou">brightamouzou</a></span>
        </li>
        <li className="contactUs__phoneNumber">
          <CallIcon />
          <span className="contactUs__label">+22890443461</span>
        </li>
        <li className="contactUs__loaclisation">
          <AddLocationIcon />
          <span className="contactUs__label">Lomé, Togo</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs