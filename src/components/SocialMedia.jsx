import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaBehance, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://twitter.com/QbaWebDeveloper"  target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.behance.net/qbaskupinseda1"  target="_blank" rel="noreferrer">
          <FaBehance />
        </a>
      </div>
      <div>
        <a href="https://github.com/eXsik"  target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://pl.linkedin.com/in/jakub-skupi%C5%84ski-b0b62715a"  target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia