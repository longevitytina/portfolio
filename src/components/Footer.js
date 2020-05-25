import React from "react"
import styles from "./Footer.module.css"
import "../../src/fontawesome"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"

const Footer = () => (
  <div>
    <ul style={{ listStyle: `none`, float: `left` }}>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a
          href="https://www.linkedin.com/in/tina-taylor-codes/"
          className="fab fa-linkedin"
        >
          <span className="label">
            <FaLinkedinIn />
          </span>
        </a>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href="https://github.com/longevitytina" className="icon fa-github">
          <span className="label">
            <FaGithub />
          </span>
        </a>
      </li>

      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href="#contact" className="icon fa-envelope-o">
          <span className="label"></span>
          <FaMailBulk />
        </a>
      </li>
    </ul>
  </div>
)

export default Footer
