import React from "react"
import "../../src/fontawesome"
import FooterStyles from "./Footer.module.css"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"

const Footer = () => (
  <div>
    <ul style={{ listStyle: `none`, textAlign: `center` }}>
      <li className={FooterStyles.label}>
        <a
          href="https://www.linkedin.com/in/tina-taylor-codes/"
          className="fab fa-linkedin"
        >
          <span className={FooterStyles.label}>
            <FaLinkedinIn />
          </span>
        </a>
      </li>
      <li className={FooterStyles.label}>
        <a href="https://github.com/longevitytina" className="icon fa-github">
          <span className={FooterStyles.label}>
            <FaGithub />
          </span>
        </a>
      </li>

      <li className={FooterStyles.label}>
        <a href="#contact" className="icon fa-envelope-o">
          <span className={FooterStyles.label}>
            <FaMailBulk />
          </span>
        </a>
      </li>
    </ul>
  </div>
)

export default Footer
