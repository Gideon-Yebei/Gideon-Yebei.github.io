import React from 'react';
import { BsDribbble, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";


function HeaderSocials ()
{
  return (
    <div className="header__socials">
      <a href="https://github.com/Gideon-Yebei" target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/gideon-yebei" target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href="https://twitter.com" target='_blank' rel='noreferrer'>
        <BsTwitterX />
      </a>
      <a href="https://dribble.com" target='_blank' rel='noreferrer'>
        <BsDribbble />
      </a>
      <a href="https://hashnode.com" target='_blank' rel='noreferrer'>
        <FaHashnode />
      </a>
      <a href="https://discord.com" target='_blank' rel='noreferrer'>
        <FaDiscord />
      </a>
    </div>
  );
}

export default HeaderSocials;