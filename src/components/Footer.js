import React from 'react'
import { FaLinkedinIn } from '@fortawesome/react-fontawesome'
import styles from "./Footer.module.css"


const Footer = () => (
  <ul className="icons">

    <li>
      <a href="https://www.linkedin.com/in/tina-taylor-codes/" className="FaLinkedinIn">
        <span className="label">LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/longevitytina" className="icon fa-github">
        <span className="label">Github</span>
      </a>
    </li>

    <li>
      <a href="#" className="icon fa-envelope-o">
        <span className="label">Email</span>
      </a>
    </li>
  </ul>
)

export default Footer
