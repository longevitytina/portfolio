import React from "react"

import Footer from "./Footer"
import avatar from "../assets/images/avatar.jpg"
import headerStyles from "./Header.module.css"

const Header = () => (
  <div>
    <div className={headerStyles.header}>
      <img src={avatar} className={headerStyles.avatar} alt="" />
      <h3 className={headerStyles.description}>
        <strong>Hi! I'm Tina</strong>, your friendly neighborhood developer,
        artist, entrepreneur, and friend.
        <br />
        Let's connect!
      </h3>
    </div>
    <Footer />
  </div>
)

export default Header
