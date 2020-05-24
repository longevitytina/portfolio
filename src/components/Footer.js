import React from 'react'
import styles from "./Footer.module.css"
import '../../src/fontawesome'

const Footer = () => (
  <div>
    <ul style={{ listStyle: `none`, float: `left` }}>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href="https://www.linkedin.com/in/tina-taylor-codes/" className="fab fa-linkedin">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href="https://github.com/longevitytina" className="icon fa-github">
          <span className="label">Github</span>
        </a>
      </li>

      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <a href="#" className="icon fa-envelope-o">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Footer
