import React from "react"
import styling from "./ProjectItem.module.css"
import { Button } from "react-bootstrap"

export default function ProjectItem({ source, link }) {
  return (
    <div style={{ position: `relative` }}>
      <img src={source} className={styling.image} alt="" />
      <Button
        variant="outline-secondary"
        size="sm"
        style={{
          position: `absolute`,
          top: `50%`,
          left: `35%`,
        }}
        href={link}
        target="_blank"
      >
        View Project
      </Button>
    </div>
  )
}
