import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom"
import CloseIcon from "../CloseIcon";
import AddIcon from "@mui/icons-material/Add";

const socialMedias=[
    {
        icon:<FacebookIcon/>,
        link: "#"
    },

    {
        icon:<InstagramIcon/>,
        link: "#"
    },

    {
        icon:<TwitterIcon/>,
        link: ""
    },

    {
        icon:<LinkedInIcon/>,
        link: "#"
    }
]


const SocialMedias = ({ onClickHandler, unrollSvgClick }) => {
  return (
    <div className="socialMedias">
      <button
        onClick={(e) => {
          onClickHandler && onClickHandler(e);
        }}
      >
        <span>Follow us</span>
        <span
          className="toggleItem"
          onClick={(e) => {
            unrollSvgClick && unrollSvgClick(e);
          }}
        >
          <AddIcon />
        </span>
      </button>
      <ul className="socialMedias__items">
        {socialMedias.map((media, id) => (
          <li key={id}>
            <Link to={media.link}>{media.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedias;