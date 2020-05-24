import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import headerStyles from "./Header.module.css"

const Header = () => (
  <div>
    <div className={headerStyles.header}>
      <img src={avatar} className={headerStyles.avatar} alt="" />
      <h1 className={headerStyles.description}>
        <strong>Hi! I'm Tina</strong>, your friendly neighborhood developer,
        <br />
        artist, entrepuner, and friend.
        <br />
        Let's connect!
      </h1>
    </div>
    <Footer />
  </div>
)

export default Header
