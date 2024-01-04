import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddIcon from "@mui/icons-material/Add";
import { GitHub } from '@mui/icons-material';

const socialMedias = [
  {
    icon: <FacebookIcon />,
    link: "http://facebook.com/brightamouzou",
  },

  {
    icon: <InstagramIcon />,
    link: "http://instagram.com/bab_fingers",
  },

  {
    icon: <TwitterIcon />,
    link: "http://twitter.com/BrightAMOUZOU1",
  },

  {
    icon: <LinkedInIcon />,
    link: "http://linkedin.com/brightamouzou",
  },
  {
    icon: <GitHub/>,
    link: "http://github.com/brightamouzou",
  },
];


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
            <a href={media.link} target="_blank" rel='noreferrer'>{media.icon}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedias;