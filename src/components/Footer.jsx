import React from 'react';
import { linkedin, name } from '../content';

function Footer() {
  return (
    <div className="mx-auto w-full text-center">
      <p className="text-xl">Made with ❤️ by <a className="hover:text-gray-400" href={linkedin} target="_blank" rel="noreferrer"> {name}</a></p>
    </div>
  )
}

export default Footer;